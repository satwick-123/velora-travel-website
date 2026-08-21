const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const { findByEmail, createUser } = require("../data/users");

router.get("/signup", (req, res) => {
  res.render("signup", { title: "Velora | Sign up", error: null });
});

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).render("signup", {
      title: "Velora | Sign up",
      error: "All fields are required."
    });
  }
  if (findByEmail(email)) {
    return res.status(400).render("signup", {
      title: "Velora | Sign up",
      error: "An account with that email already exists."
    });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = createUser({ name, email, passwordHash });
  req.session.user = { id: user.id, name: user.name, email: user.email };
  res.redirect("/stays");
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Velora | Login", error: null });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = findByEmail(email || "");

  if (!user || !(await bcrypt.compare(password || "", user.passwordHash))) {
    return res.status(400).render("login", {
      title: "Velora | Login",
      error: "Invalid email or password."
    });
  }

  req.session.user = { id: user.id, name: user.name, email: user.email };
  const redirectTo = req.session.redirectTo || "/stays";
  delete req.session.redirectTo;
  res.redirect(redirectTo);
});

router.post("/logout", (req, res) => {
  req.session.destroy(() => res.redirect("/"));
});

module.exports = router;
