const { RESTDataSource } = require('apollo-datasource-rest');
require('dotenv').config();

class ProfileAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = process.env.PROFILEHOST;
  }

  async getProfile() {
    // Send a GET request to the specified endpoint
    return await this.get(`profile`);
  }

}

module.exports = ProfileAPI;