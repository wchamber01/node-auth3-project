const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findByUser,
  findById
};

function find() {
  return db("users").select("id", "username", "department");
}

function findBy(filter) {
  return db("users").where("users.department", filter);
  // .select("id", "username", "department");
}

function findByUser(filter) {
  return db("users").where("users.userName", filter);
  // .select("id", "username", "department");
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
