const db = require('../config/connection');
const { About, Product, Thought } = require('../models');
const aboutSeeds = require('./aboutSeeds.json');
const productSeeds = require('./productSeeds.json');
const thoughtSeeds = require('./thoughtSeeds.json');

db.once('open', async () => {
  try {
    // Remove existing documents from all collections
    await About.deleteMany({});
    await Product.deleteMany({});
    await Thought.deleteMany({});

    // Seed the 'About' collection
    await About.create(aboutSeeds);

    // Seed the 'Product' collection
    await Product.create(productSeeds);

    // Seed the 'Thought' collection
    await Thought.create(thoughtSeeds);

    console.log('Seeding completed successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
});

