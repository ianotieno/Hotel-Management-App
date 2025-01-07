"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Rooms = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const roomType = searchParams.get("roomType") ; // Default to "All" if not specified
    const searchQuery = searchParams.get("searchQuery") ;

 

    console.log("Room Type:", roomType);
    console.log("Search Query:", searchQuery);
  }, [searchParams]); // Add searchParams as a dependency

  return (
    <div className="container mx-auto pt-10">
      <h1>Rooms</h1>
      
    </div>
  );
};

export default Rooms;
