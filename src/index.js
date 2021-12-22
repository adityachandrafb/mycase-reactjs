import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import client from './apollo-client';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
  console.log("client = ", client )


ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
     </ApolloProvider>,
document.getElementById('root'));
