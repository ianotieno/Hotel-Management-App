import { getRoom } from "@/libs/apis";
import { authOptions } from "@/libs/auth";

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-12-18.acacia",
});
type RequestData = {
  checkinDate: string;
  checkoutDate: string;
  adults: number;
  children: number;
  numberOfDays: number;
  hotelRoomSlug: string;
};

export async function POST(req: Request, res: Request) {
  const {
    checkinDate,
    adults,
    checkoutDate,
    numberOfDays,
    children,
    hotelRoomSlug,
  }: RequestData = await req.json();

  if(!checkinDate || !checkoutDate || !adults || !numberOfDays || !hotelRoomSlug){
    return new NextResponse ('Missing required fields',{status:400});}

    const origin =req.headers.get('origin');    
    const session= await getServerSession(authOptions);
    if (!session) {
      return new NextResponse('Authentication Required',{status:401});
    }
    const userId = session.user.id;
    const formattedCheckinDate = checkinDate.split('T')[0];
    const formattedCheckoutDate = checkoutDate.split('T')[0];

    try {
        const room = await getRoom(hotelRoomSlug);
        const discountPrice = room.price - (room.price/ 100)* room.discount ;
        const totalPrice = discountPrice * numberOfDays;

        const stripeSession = await stripe.checkout.sessions.create({
              mode: 'payment',  
              line_items: [
                    {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: room.name,
                                images: room.images.map((image) => image.url),
                            },
                            unit_amount: parseInt((totalPrice * 100).toString()),
                        },
                        quantity: 1,
                    },
              ],
              payment_method_types: ['card'],  
              success_url: `${origin}/users/${userId}`, 
              metadata: {
                adults,
                checkinDate: formattedCheckinDate,
                checkoutDate: formattedCheckoutDate,
                children,
                hotelRoom: room._id,
                numberOfDays,
                user: userId,
                discount: room.discount,
                totalPrice
              }

        });
        return  NextResponse.json(stripeSession,{status:200, statusText:'Payment session created'});
    } catch (error) {
        console.error(error);
       return new NextResponse('An error occurred',{status:500}); 
    }
  }

