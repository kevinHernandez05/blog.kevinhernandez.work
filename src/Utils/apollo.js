import ApolloClient from "apollo-boost";

import { Config } from '../Config'

export const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${atob(Config.githubConvertedToken)}`
      }
    });
  }
});

export const userClient = (token) => new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  }
});