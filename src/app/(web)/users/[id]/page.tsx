"use client";

import useSWR from "swr";
import { getUserBookings } from '@/libs/apis';
import axios from 'axios';
import { User } from '@/model/user';
import { use } from "react";
import Image from 'next/image';
import LoadingSpinner from "../../loading";
import { FaSignOutAlt } from 'react-icons/fa';
import { signOut } from 'next-auth/react';

const UserDetails = (props: { params: Promise<{ id: string }> }) => {
  // Resolving the `params` Promise to get `userId`
  const params = use(props.params);
  const { id: userId } = params;

  // Fetcher function for user data
  const fetchUserData = async () => {
    const { data } = await axios.get<User>('/api/users');
    return data;
  };

  // SWR hook for fetching user data
  const {
    data: userData,
    isLoading: loadingUserData,
    error: errorGettingUserData,
  } = useSWR('/api/users', fetchUserData);

  // Fetcher function for user bookings
  const fetchUserBooking = async () => getUserBookings(userId);

  // SWR hook for fetching user bookings
  const {
    data: userBookings,
    isLoading: loadingUserBookings,
    error: errorGettingUserBookings,
  } = useSWR(userId ? `/api/userbooking?userId=${userId}` : null, fetchUserBooking);

  

  // Handle loading states
  if (loadingUserData || loadingUserBookings) {
    return <LoadingSpinner />;
  }

  // Handle errors
  if (errorGettingUserData || errorGettingUserBookings) {
    console.error('Error fetching data:', errorGettingUserData || errorGettingUserBookings);
    return <div>Error fetching data. Please try again later.</div>;
  }

  // Handle missing data
  if (!userData || !userBookings) {
    console.warn('Data is not available.');
    return <div>Data not available</div>;
  }

  return ( 
  <div className='container mx-auto px-2 md:px-4 py10'>
  <div className='grid md:grid-cols-12 gap-10'>
    <div className='hidden md:block md:col-span-4 lg:col-span-3 shadow-lg h-fit sticky top-10 bg-[#eff0f2] text-black rounded-lg px-6 py-4'>
      <div className='md:w-[143px] w-28 h-28 md:h-[143px] mx-auto mb-5 rounded-full overflow-hidden'>
      <Image
              src={userData.image}
              alt={userData.name}
              width={143}
              height={143}
              className='img scale-animation rounded-full'
            />
   
</div>
<div className='font-normal py-4 text-left'>
            <h6 className='text-xl font-bold pb-3'>About</h6>
            <p className='text-sm'>{userData.about ?? ''}</p>
          </div>
          <div className='font-normal text-left'>
            <h6 className='text-xl font-bold pb-3'>{userData.name}</h6>
          </div>
          <div className='flex items-center'>
            <p className='mr-2'>Sign Out</p>
            <FaSignOutAlt
              className='text-3xl cursor-pointer'
              onClick={() => signOut({ callbackUrl: '/' })}
            />
          </div>
</div>
</div>
</div>)
   
};

export default UserDetails;
