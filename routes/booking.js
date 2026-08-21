const express = require("express");
const router = express.Router();
const { getHotelById, createBooking, getBookingById } = require("../data/hotels");
const { requireLogin } = require("../middleware/auth");

// Listing detail + booking form
router.get("/stays/:id", (req, res) => {
  const hotel = getHotelById(req.params.id);
  if (!hotel) {
    return res.status(404).render("404", { title: "Velora | Not found" });
  }
  res.render("listing-detail", {
    title: `Velora | ${hotel.name}`,
    hotel,
    error: null
  });
});

// Submit a booking (must be logged in)
router.post("/stays/:id/book", requireLogin, (req, res) => {
  const hotel = getHotelById(req.params.id);
  if (!hotel) {
    return res.status(404).render("404", { title: "Velora | Not found" });
  }

  const { checkIn, checkOut, guests } = req.body;
  if (!checkIn || !checkOut) {
    return res.status(400).render("listing-detail", {
      title: `Velora | ${hotel.name}`,
      hotel,
      error: "Please choose both a check-in and check-out date."
    });
  }
  if (new Date(checkOut) <= new Date(checkIn)) {
    return res.status(400).render("listing-detail", {
      title: `Velora | ${hotel.name}`,
      hotel,
      error: "Check-out date must be after the check-in date."
    });
  }

  const booking = createBooking({
    hotelId: hotel.id,
    userEmail: req.session.user.email,
    checkIn,
    checkOut,
    guests
  });

  res.redirect(`/bookings/${booking.id}/confirmation`);
});

// Confirmation page
router.get("/bookings/:id/confirmation", requireLogin, (req, res) => {
  const booking = getBookingById(req.params.id);
  if (!booking || booking.userEmail !== req.session.user.email) {
    return res.status(404).render("404", { title: "Velora | Not found" });
  }
  const hotel = getHotelById(booking.hotelId);
  const nights = Math.round(
    (new Date(booking.checkOut) - new Date(booking.checkIn)) / (1000 * 60 * 60 * 24)
  );
  res.render("booking-confirm", {
    title: "Velora | Booking confirmed",
    booking,
    hotel,
    nights,
    total: nights * hotel.price
  });
});

module.exports = router;
