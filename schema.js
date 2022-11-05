const { gql } = require('apollo-server');
const typeDefs = gql`
type temp {
  id: ID
}

type profile {
  a_score: Int, 
  anonymous_proxy: Boolean, 
  b_score: Int, 
  bin_name: String, 
  country_code: String, 
  country_match: Boolean, 
  cust_phone_in_billing_loc: String, 
  distance: Int, 
  explanation: String, 
  free_mail: Boolean, 
}
type Query {
  temps: [temp],
  profile: profile,
}
`;

module.exports = typeDefs;