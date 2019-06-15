const db = require("../dbConfig.js");

function find() {
  return db("users").select("id", "username", "password", "department");
}

function findBy(filter) {
  return db("users").where(filter);
}

function add(user) {
  //abstracting out the id from inserted user
  const [id] = db("users").insert(user);

  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

module.exports = {
  find,
  findBy,
  findById,
  add
};
