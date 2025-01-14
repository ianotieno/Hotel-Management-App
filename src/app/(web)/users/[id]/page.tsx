"use client";

import useSWR from "swr";
import { getUserBookings } from '@/libs/apis';
import { use} from "react";
const UserDetails = (props: { params: Promise<{ id: string }> }) => {

    const params = use(props.params);
    const { id:userId } = params;


    const fetchUserBooking = async () => getUserBookings(userId);
    
    const {
        data: userBookings,
        error,
        isLoading,

      } = useSWR('/api/userbooking', fetchUserBooking);
    
  if (error ) throw new Error('Cannot fetch data');
  if (typeof userBookings === 'undefined' && !isLoading)
    throw new Error('Cannot fetch data');
   console.log(userBookings);


  return (
    <div>page</div>
  )
}

export default UserDetails