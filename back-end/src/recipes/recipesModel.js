const knex = require("../../knex");
// const { validProps, requiredProps } = require("../util/validation");

// const validateProps = validProps([
//   "id",
//   "email",
//   "first_name",
//   "last_name",
//   "address",
//   "city",
//   "region",
//   "country",
//   "postal_code",
// ]);

// const validateRequired = requiredProps(["email", "last_name", "postal_code"]);

const RECIPES_TABLE = "recipes";

module.exports = {
  RECIPES_TABLE,


  getAll(limit = 100) {
    return knex
      .select({
        id: "id",
        name: "name",
        ingredients: "ingredients",
        instructions: "instructions",
      })
      .from(RECIPES_TABLE);
  },

  getById(id) {
    return knex
      .select({
        id: "id",
        name: "name",
        ingredients: "ingredients",
        instructions: "instructions",
      })
      .from(RECIPES_TABLE)
      .where({
        id: id,
      });
  },

  // /**
  //  * @param {Object} customer - The new customer data to add.
  //  * @return {Promise<number>} A promise that resolves to the id of created customer.
  //  */
  // create(customer) {
  //   validateRequired(validateProps(customer));
  //   return knex(CUSTOMER_TABLE).insert(customer);
  // },

  // /**
  //  * @param {number} id - The unique id of the existing customer.
  //  * @param {Object} customer - The customer data to change.
  //  * @return {Promise<number>} A promise that resolves to the id of the updated customer.
  //  */
  // update(id, customer) {
  //   validateProps(customer);
  //   return knex(CUSTOMER_TABLE)
  //     .where({ id: id })
  //     .update(customer)
  //     .returning("id")
  //     .then((result) => result[0].id);
  // },
};
