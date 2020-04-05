// src/graphql/MyApp/schemas/UserPostSchema.js

const MODEL_NAME = 'UserPost';

const UserPostSchema = {
    model: `
        type ${MODEL_NAME} {
            id: Int!
            title: String!
            content: String!
            hits: Int!
            created: Date
            updated: Date
        }

        type ${MODEL_NAME}Page {
            count: Int!
            rows: [${MODEL_NAME}]
        }
    `,

    query: {
        read: `readUserPost(id: Int!): ${MODEL_NAME}`,
        readItems: `readUserPosts(offset: Int!, limit: Int!): ${MODEL_NAME}Page`,
    },

    mutation: {
        create: `createUserPost(title: String!, content: String!): ${MODEL_NAME}`,
        update: `updateUserPost(id: Int!, title: String!, content: String!, hit: Int!, created: Date, updated: Date): ${MODEL_NAME}`,
    },
};

module.exports = UserPostSchema;