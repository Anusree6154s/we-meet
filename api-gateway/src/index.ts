import { ApolloServer } from "apollo-server";
import { mergeSchemas } from "@graphql-tools/schema";
import dotenv from "dotenv";
import { createServiceProxy } from "./utils/serviceProxy";
import resolvers from "./resolvers";

dotenv.config();

const schema = mergeSchemas({ resolvers });
const context = ({ req }) => ({
  authheader: req.headers.authorization,
  serviceProxy: createServiceProxy(),
});
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({ schema, context });
server
  .listen(PORT)
  .then(({ url }) => console.log("Gateway ready at ", url))
  .catch((error) => console.error("Error starting server at gateway: ", error));
