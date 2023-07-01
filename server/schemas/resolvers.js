const { About, Product, CustomWork } = require('../models');

const resolvers = {
  Query: {
    abouts: async () => {
      return About.find().sort({ createdAt: -1 });
    },
    about: async (parent, { aboutId }) => {
      return About.findOne({ _id: aboutId });
    },
    products: async () => {
      return Product.find().sort({ createdAt: -1 });
    },
    product: async (parent, { productId }) => {
      return Product.findOne({ _id: productId });
    },
    customWorks: async () => {
      return CustomWork.find().sort({ createdAt: -1 });
    },
    customWork: async (parent, { customWorkId }) => {
      return CustomWork.findOne({ _id: customWorkId });
    },
  },
  Mutation: {
    addAbout: async (parent, { aboutText, aboutAuthor }) => {
      return About.create({ aboutText, aboutAuthor });
    },
    removeAbout: async (parent, { aboutId }) => {
      return About.findOneAndDelete({ _id: aboutId });
    },
    addProduct: async (parent, { productName, productDescription }) => {
      return Product.create({ productName, productDescription });
    },
    removeProduct: async (parent, { productId }) => {
      return Product.findOneAndDelete({ _id: productId });
    },
    addCustomWork: async (parent, { customWorkName, customWorkDescription }) => {
      return CustomWork.create({ customWorkName, customWorkDescription });
    },
    removeCustomWork: async (parent, { customWorkId }) => {
      return CustomWork.findOneAndDelete({ _id: customWorkId });
    },
  },
};

module.exports = resolvers;
