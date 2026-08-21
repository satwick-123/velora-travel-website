require("dotenv").config();

const express = require("express");
const path = require("path");
const session = require("express-session");

const { attachUser } = require("./middleware/auth");
const indexRoutes = require("./routes/index");
const authRoutes = require("./routes/auth");
const bookingRoutes = require("./routes/booking");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "dev-only-secret-change-me",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 day
  })
);

app.use(attachUser);

app.use("/", indexRoutes);
app.use("/", authRoutes);
app.use("/", bookingRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).render("404", { title: "Velora | Not found" });
});

// Central error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Something went wrong. Please try again later.");
});

app.listen(PORT, () => {
  console.log(`Velora running on http://localhost:${PORT}`);
});
