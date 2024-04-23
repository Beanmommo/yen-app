export type Hotel = {
  id: string;
  hotel_name: string;
  hote_address: string;
  hotel_about: string;
  cover_image_url: string;
  hotel_images_url: [string];
};

enum beddingEnum {
  singleBed = "Single Bed",
  doubleBed = "Double Bed",
  singleKingBed = "Single King Bed",
  queenBed = "Queen Size Bed",
  kingBed = "King Size Bed",
}

enum guestEnum {
  adult = "Adult",
}

enum currencyEnum {
  idr,
}

export type HotelRoom = {
  id: string;
  hotel_id: string;
  image_url: string;
  room_name: string;
  bedding: [
    {
      bedding_amount: number;
      bedding_type: beddingEnum;
    },
  ];
  guest: {
    guest_amount: number;
    guest_typ: guestEnum;
  };
  price: {
    price_amount: number;
    price_currency: currencyEnum;
  };
};
