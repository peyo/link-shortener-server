const { gql } = require("apollo-server");

const typeDefs = gql`
  type Link {
    id: Int!
    slug: String!
    description: String!
    link: String!
    shortLink: String!
  }

  type Query {
    allLinks: [Link!]!
    link(id: Int!): Link
  }

  type Mutation {
    createLink(
      slug: String
      description: String!
      link: String!
      shortLink: String
    ): Link!
  }
`;

module.exports = typeDefs;
