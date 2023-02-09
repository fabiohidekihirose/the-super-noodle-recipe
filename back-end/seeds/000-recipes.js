/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del()
  await knex('recipes').insert([
    {id: 1, name: 'the noodle1', ingredients: "2 chicken breasts (boneless, skin-on)kosher salt and freshly-ground black pepper, to season \n 1 Tbsp unsalted butter\n2 tsp sesame or vegetable oil\n2 tsp fresh ginger, minced\n1 Tbsp fresh garlic, minced", instructions: "put the noodles in water and boile them"},
    {id: 2, name: 'the noodle2', ingredients: "chicken noodle salt", instructions: "put it in the microwave and wait 3 minutes"},
    {id: 3, name: 'the noodle3', ingredients: "pork salt noodle", instructions: "put in the oven and wait 10 minutes"}
  ]);
};
