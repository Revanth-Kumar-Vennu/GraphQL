
/**
 * @typedef {Object} Game - Represents a game.
 * @property {string} id - The ID of the game.
 * @property {string} title - The title of the game.
 * @property {string[]} platform - The platforms on which the game is available.
 * @property {Review[]} reviews - The reviews of the game.
 */

/**
 * @typedef {Object} Review - Represents a review.
 * @property {string} id - The ID of the review.
 * @property {number} rating - The rating given in the review.
 * @property {string} content - The content of the review.
 * @property {Game} game - The game being reviewed.
 * @property {Author} author - The author of the review.
 */

/**
 * @typedef {Object} Author - Represents an author.
 * @property {string} id - The ID of the author.
 * @property {string} name - The name of the author.
 * @property {boolean} verified - Indicates if the author is verified.
 * @property {Review[]} reviews - The reviews written by the author.
 */

/**
 * @typedef {Object} Query - Represents a GraphQL query.
 * @property {Review[]} reviews - Retrieves all reviews.
 * @property {Review} review - Retrieves a specific review by ID.
 * @property {Game[]} games - Retrieves all games.
 * @property {Game} game - Retrieves a specific game by ID.
 * @property {Author[]} authors - Retrieves all authors.
 * @property {Author} author - Retrieves a specific author by ID.
 */

/**
 * @typedef {Object} Mutation - Represents a GraphQL mutation.
 * @property {Game[]} deleteGame - Deletes a game by ID.
 * @property {Game} addGame - Adds a new game.
 * @property {Game} updateGame - Updates a game by ID.
 */

/**
 * @typedef {Object} AddGame - Represents the input for adding a game.
 * @property {string} title - The title of the game.
 * @property {string[]} platform - The platforms on which the game is available.
 */

/**
 * @typedef {Object} UpdateGame - Represents the input for updating a game.
 * @property {string} title - The updated title of the game.
 * @property {string[]} platform - The updated platforms on which the game is available.
 */

/**
 * @type {string} typeDefs - The GraphQL schema definition.
 */
export const typeDefs = `#graphql
type Game{
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
}

type Review{
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!

}

type Author{
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
}

type Query{
    reviews: [Review]
    review(id: ID!): Review
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
}

type Mutation{
    deleteGame(id: ID!): [Game]
    addGame(game: AddGame!): Game
    updateGame(id: ID!, edits: UpdateGame!): Game
}

input AddGame{
    title: String!,
    platform: [String!]!
}

input UpdateGame{
    title: String,
    platform: [String!]
}



`;
