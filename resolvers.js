const data = require('./datasources/Data');
const profileData = require('./datasources/ProfileData');
const typesData = require('./datasources/TypesData');


const resolvers = {
    Query: {
    temps: () => data.temps,
    profiles: () => profileData.profiles,
    types: () => typesData.types,
    // movie: async (_, { id }, { dataSources }) => {
    //     return dataSources.moviesAPI.getMovie(id);
    //   },
    // mostViewedMovies: async (_, __, { dataSources }) => {
    //     return dataSources.moviesAPI.getMostViewedMovies();
    //   },
    // favorites: async (_, __, { dataSources }) => {
    //     return dataSources.personalizationAPI.getFavorites();
    //   },
    }
};
  
//   };
//   const resolvers = {
//     Query: {
//     //   temps: async(_, __, { dataSources }) => {
//     //     return dataSources.temps.id;
//     //   },
//       movie: async (_, { id }, { dataSources }) => {
//         return dataSources.moviesAPI.getMovie(id);
//       },
//       mostViewedMovies: async (_, __, { dataSources }) => {
//         return dataSources.moviesAPI.getMostViewedMovies();
//       },
//       favorites: async (_, __, { dataSources }) => {
//         return dataSources.personalizationAPI.getFavorites();
//       },
//     },
//   };

  module.exports = resolvers;