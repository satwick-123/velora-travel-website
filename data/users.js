// In-memory demo user store.
// Swap this module for a real database when you're ready to persist data.

const users = [];
let nextId = 1;

function findByEmail(email) {
  return users.find((u) => u.email.toLowerCase() === String(email).toLowerCase());
}

function createUser({ name, email, passwordHash }) {
  const user = { id: nextId++, name, email, passwordHash };
  users.push(user);
  return user;
}

module.exports = { findByEmail, createUser };
