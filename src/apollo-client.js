import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';


const httpLink = new HttpLink({
  uri: 'https://credible-wasp-50.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret':
      'PQNyM2r6F4pBvCRBMEezEkIsTTbtMGu5H4znD07kbp393n54XwLumLAYlq1ealfY',
  },
});

const wsLink = new WebSocketLink({
  uri: 'wss://credible-wasp-50.hasura.app/v1/graphql',
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        'x-hasura-admin-secret':
          'PQNyM2r6F4pBvCRBMEezEkIsTTbtMGu5H4znD07kbp393n54XwLumLAYlq1ealfY',
      },
    }
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);


const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;