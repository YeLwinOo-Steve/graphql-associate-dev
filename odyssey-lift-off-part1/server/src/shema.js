const gql = require("graphql-tag")

const typeDefs = gql`
type Query {
  "Get tracks array for homepage grid"
  tracksForHome: [Track!]!
}
"A track is a group of Modules that teaches about a specific topic"
type Track {
  id: ID!
  title: String!
  author: Author!
  thumbnail: String
  length: Int
  modulesCount: Int
}
"Author of a complete Track"
type Author {
  id: ID!
  "Author's first and last name"
  name: String!
  "Author's profile picture url"
  photo: String
}
`

module.exports = typeDefs;