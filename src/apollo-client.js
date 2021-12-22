import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';


const httpLink = new HttpLink({
  uri: 'https://full-egret-76.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret':
      '4YD68r3xGX2e5nVh41RpJULO3wOxYaOCVOu0tgxw9j9T4FRHjBRQhiVabv1jWRSL',
  },
});

const wsLink = new WebSocketLink({
  uri: 'wss://full-egret-76.hasura.app/v1/graphql',
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        'x-hasura-admin-secret':
          '4YD68r3xGX2e5nVh41RpJULO3wOxYaOCVOu0tgxw9j9T4FRHjBRQhiVabv1jWRSL',
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