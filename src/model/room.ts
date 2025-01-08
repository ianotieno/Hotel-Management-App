type CoverImage={
    url:string
}

type Image={
    _key:string
    url:string
}
type Amenity={
        _key:string
        aminity:string
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
    dimensions:string;
    discount:number;
    images:Image[];
    isBooked:boolean;
    isFeatured:boolean;
    name:string;
    numberOfBeds:number;
    slug:Slug;
    offeredAminities:Amenity[];
    price:number;
    type:string;
    specialNote:string;

}