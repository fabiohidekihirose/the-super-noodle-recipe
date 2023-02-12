/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("recipes").del();
  await knex("recipes").insert([
    {
      id: 1,
      name: "Ramen",
      ingredients:
        "2 chicken breasts (boneless, skin-on)kosher salt and freshly-ground black pepper, to season \n 1 Tbsp unsalted butter\n2 tsp sesame or vegetable oil\n2 tsp fresh ginger, minced\n1 Tbsp fresh garlic, minced",
      instructions: "put the noodles in water and boil them",
    },
    {
      id: 2,
      name: "Udon",
      ingredients: "chicken noodle salt",
      instructions: "put it in the microwave and wait 3 minutes",
    },
    {
      id: 3,
      name: "Soba",
      ingredients: "pork salt noodle",
      instructions: "put in the oven and wait 10 minutes",
    },
    {
      id: 4,
      name: "Singapore Noodles",
      ingredients:
        "3 tbsp teriyaki sauce \n½ tsp Chinese five-spice powder \n2 tsp medium Madras curry powder \n300g/11oz pork tenderloin, trimmed of any fat",
      instructions:
        "Mix the teriyaki sauce, five-spice and curry powders. Add half to the pork, turning to coat, and leave to marinate for 15 mins.",
    },
  ]);
};
