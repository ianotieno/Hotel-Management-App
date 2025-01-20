import Stripe from "stripe";
import { NextResponse } from "next/server";
import { createBooking, updateHotelRoom } from "@/libs/apis";


const checkout_session_completed = "checkout.session.completed";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-12-18.acacia",
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(req: Request,) {
  const reqBody = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  let event: Stripe.Event;

  try {
    if (!sig || !webhookSecret) return;
    event = stripe.webhooks.constructEvent(reqBody, sig, webhookSecret);
  } catch (error) {
    return new NextResponse(`Webhook Error: ${error}`, { status: 500 });
  }

  switch (event.type) {
    case checkout_session_completed:
      const session = event.data.object;
      console.log("Checkout Session Completed", session);
      if (!session.metadata) {
        return new NextResponse("Metadata is missing in the session", { status: 400 });
      }

      const {
        adults,
        checkinDate,
        checkoutDate,
        children,
        hotelRoom,
        numberOfDays,
        user,
        discount,
        totalPrice,
      } = session.metadata;

      await createBooking({
        adults: Number(adults),
        checkinDate,
        checkoutDate,
        children: Number(children),
        hotelRoom,
        numberOfDays: Number(numberOfDays),
        discount: Number(discount),
        totalPrice: Number(totalPrice),
        user,
      });
      await updateHotelRoom(hotelRoom);
      
      return NextResponse.json("Booking Successful", {
        status: 200,
        statusText: "Booking Successful",
      });
      
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }
  return NextResponse.json("Booking Successful", {
    status: 200,
    statusText: "Event Received",
  });
}




