type CoverImage={
    url:string
}

export type Image={
    _key:string
    url:string
}
type Amenity={
        _key:string
        amenity:string
        icon:string
}
type Slug={
    _type:string;
    current:string;
}
export type Room={
    _id:string;
    coverImage:CoverImage;
    description:string;
    dimension:string;
    discount:number;
    images:Image[];
    isBooked:boolean;
    isFeatured:boolean;
    name:string;
    numberOfBeds:number;
    slug:Slug;
    offeredAmenities:Amenity[];
    price:number;
    type:string;
    specialNote:string;

}