/**
 * @fileoverview This file contains the main server code for a GraphQL API.
 * It sets up an Apollo Server with defined type definitions and resolvers,
 * and starts a standalone server to listen for incoming requests.
 */

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./db.js";

/**
 * Resolvers for GraphQL queries and mutations.
 * @type {Object}
 */
const resolvers = {
    Query: {
        reviews: () => db.reviews,
        games: () => db.games,
        authors: () => db.authors,
        review: (_, args) => db.reviews.find((review) => review.id === args.id),
        game: (_, args) => db.games.find((game) => game.id === args.id),
        author: (_, args) => db.authors.find((author) => author.id === args.id),
    },
    Game: {
        reviews: (parent) =>
            db.reviews.filter((review) => review.game_id === parent.id),
    },
    Review: {
        game: (parent) => db.games.find((game) => game.id === parent.game_id),
        author: (parent) =>
            db.authors.find((author) => author.id === parent.author_id),
    },
    Author: {
        reviews: (parent) =>
            db.reviews.filter((review) => review.author_id === parent.id),
    },

    Mutation: {
        deleteGame: (_, args) => {
            db.games = db.games.filter((game) => game.id !== args.id);
            return db.games;
        },
        addGame: (_, args) => {
            console.log(args);
            const newGame = {
                id: String(db.games.length + 1),
                ...args.game,
            };
            db.games.push(newGame);
            return newGame;
        },
        updateGame: (_, args) => {
            db.games = db.games.map((game) => {
                if (game.id === args.id) {
                    console.log(game);
                    return { ...game, ...args.edits };
                }

                return game;
            });
            return db.games.find((game) => game.id === args.id);
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);
