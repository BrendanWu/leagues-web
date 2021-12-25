
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
  import { WebSocketLink } from "@apollo/client/link/ws";
const HASURA_ADMIN_SECRET = process.env.REACT_APP_HASURA_ADMIN_SECRET
const WEBSOCKET_URL = process.env.REACT_APP_WEBSOCKET_URL
const headers = { "x-hasura-admin-secret": HASURA_ADMIN_SECRET };

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: WEBSOCKET_URL ? WEBSOCKET_URL : "environment variable not set",
    options: {
      reconnect: true,
      connectionParams: {
        headers,
      },
    },
  }),
  cache: new InMemoryCache(),
});

export default client;