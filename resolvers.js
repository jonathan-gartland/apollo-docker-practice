const data = require('./datasources/Data');
// const profile = require('./datasources/profile-api');



const resolvers = {
    Query: {
        temps: () => data.temps,
        profile: (_, __, { dataSources }) => {
            return dataSources.profileAPI.getProfile();
        },
    }
};
  
module.exports = resolvers;