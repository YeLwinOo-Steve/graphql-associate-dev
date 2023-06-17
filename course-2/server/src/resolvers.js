const resolvers = {
  Query: {
    // get an array of Tracks to be used in grid view
    tracksForHome: (_,__, {dataSources}) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: ({authorId},_,{dataSources}) => {
      return dataSources.trackAPI.getAuthor(authorId);
    }
  },
}
module.exports = resolvers;