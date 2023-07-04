const { MyModel } = require('./models');

const resolvers = {
  Query: {
    getData: async (_, args) => {
      try {
        // Perform some database operation
        const data = await MyModel.findById(args.id);
        return data;
      } catch (error) {
        // Handle the error
        console.error('An error occurred:', error);
        throw new Error('Failed to fetch data. Please try again later.');
      }
    },
  },
};

module.exports = resolvers;
