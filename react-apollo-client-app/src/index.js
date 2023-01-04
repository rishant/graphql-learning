import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export const springbootGraphQLClient = new ApolloClient({
  uri: 'https://localhost:7070/graphql',
  cache: new InMemoryCache(),
  // defaultOptions: {
  //   watchQuery: {
  //     nextFetchPolicy(currentFetchPolicy) {
  //       if (
  //         currentFetchPolicy === 'network-only' ||
  //         currentFetchPolicy === 'cache-and-network'
  //       ) {
  //         // Demote the network policies (except "no-cache") to "cache-first" after the first request.
  //         return 'cache-first';
  //       }
  //       // Leave all other fetch policies unchanged.
  //       return currentFetchPolicy;
  //     },
  //   }
  // }
});

const expressGraphQLClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  // defaultOptions: {
  //   watchQuery: {
  //     nextFetchPolicy(currentFetchPolicy) {
  //       if (
  //         currentFetchPolicy === 'network-only' ||
  //         currentFetchPolicy === 'cache-and-network'
  //       ) {
  //         // Demote the network policies (except "no-cache") to "cache-first" after the first request.
  //         return 'cache-first';
  //       }
  //       // Leave all other fetch policies unchanged.
  //       return currentFetchPolicy;
  //     },
  //   }
  // }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={expressGraphQLClient}>
    <App />
  </ApolloProvider>
);