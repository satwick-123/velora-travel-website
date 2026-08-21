// In-memory demo data.
// Swap this module for a real database (e.g. MongoDB + Mongoose) when you're ready to persist data.

const hotels = [
  {
    id: 1,
    name: "Cozy Hills",
    location: "Ooty, Tamil Nadu",
    price: 2499,
    rating: 4.6,
    image: "https://picsum.photos/seed/velora1/600/400",
    description:
      "A quiet hillside cottage surrounded by tea gardens, perfect for a peaceful weekend away from the city."
  },
  {
    id: 2,
    name: "Ocean View",
    location: "Goa",
    price: 3499,
    rating: 4.8,
    image: "https://picsum.photos/seed/velora2/600/400",
    description:
      "A beachfront stay with private balconies overlooking the Arabian Sea, minutes from the sand."
  },
  {
    id: 3,
    name: "Forest Stay",
    location: "Coorg, Karnataka",
    price: 2799,
    rating: 4.5,
    image: "https://picsum.photos/seed/velora3/600/400",
    description:
      "Wake up to misty coffee plantations and birdsong at this cosy forest retreat in Coorg."
  },
  {
    id: 4,
    name: "Desert Mirage",
    location: "Jaisalmer, Rajasthan",
    price: 3199,
    rating: 4.4,
    image: "https://picsum.photos/seed/velora4/600/400",
    description:
      "Traditional haveli-style rooms with rooftop views of the golden fort and the Thar Desert."
  },
  {
    id: 5,
    name: "Backwater Bliss",
    location: "Alleppey, Kerala",
    price: 4299,
    rating: 4.9,
    image: "https://picsum.photos/seed/velora5/600/400",
    description:
      "A houseboat stay drifting along the calm backwaters, complete with home-cooked Kerala meals."
  },
  {
    id: 6,
    name: "Mountain Echo",
    location: "Manali, Himachal Pradesh",
    price: 2999,
    rating: 4.7,
    image: "https://picsum.photos/seed/velora6/600/400",
    description:
      "A snug wooden lodge with views of snow-capped peaks and easy access to nearby treks."
  }
];

let nextBookingId = 1;
const bookings = [];

function getAllHotels() {
  return hotels;
}

function getHotelById(id) {
  return hotels.find((h) => h.id === Number(id));
}

function createBooking({ hotelId, userEmail, checkIn, checkOut, guests }) {
  const booking = {
    id: nextBookingId++,
    hotelId: Number(hotelId),
    userEmail,
    checkIn,
    checkOut,
    guests: Number(guests) || 1,
    createdAt: new Date()
  };
  bookings.push(booking);
  return booking;
}

function getBookingById(id) {
  return bookings.find((b) => b.id === Number(id));
}

module.exports = {
  getAllHotels,
  getHotelById,
  createBooking,
  getBookingById
};
