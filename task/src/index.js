import React from "react";
import * as ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { gql } from '@apollo/client/core';

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const data=client.query({
  query: gql`
    query {
      characters {
        results {
          id
          name
          image
        }
      }
    }
  `
});

console.log(data);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
