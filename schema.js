const { gql } = require('apollo-server');
const typeDefs = gql`
type temp {
  id: ID
}

type profile {
  #ascore: Int, 
  anonymous_proxy: Boolean, 
  #bscore: Int, 
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