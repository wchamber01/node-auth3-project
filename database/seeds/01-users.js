exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          userName: "computer",
          password: "user",
          department: "admin"
        },
        {
          id: 2,
          userName: "user",
          password: "pass",
          department: "admin"
        }
        // {
        //   id: 3,
        //   userName: "test",
        //   password: "pass",
        //   department: "admin"
        // },
        // {
        //   id: 4,
        //   userName: "bob",
        //   password: "tomato",
        //   department: "vegetable"
        // },
        // {
        //   id: 5,
        //   userName: "jr",
        //   password: "asparagus",
        //   department: "vegetable"
        // },
        // {
        //   id: 6,
        //   userName: "grapes",
        //   password: "wrath",
        //   department: "fruit"
        // },
        // {
        //   id: 7,
        //   userName: "keylime",
        //   password: "pie",
        //   department: "dessert"
        // },
        // {
        //   id: 8,
        //   userName: "canof",
        //   password: "spam",
        //   department: "cans"
        // }
      ]);
    });
};
