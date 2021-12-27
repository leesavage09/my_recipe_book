import React from "react"
import { Provider } from "react-redux"
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";
import createStore from "./src/state/createStore"

const WrapWithProvider = ({ element }) => {

  const store = createStore()

  //https://my-recipe-book-server.herokuapp.com/graphql
  //http://localhost:3001/graphql
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache()
  });

  store.subscribe(() => {
    const recipes = store.getState().recipes
    localStorage.setItem('recipes', JSON.stringify(recipes))
  })

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        {element}
      </Provider>
    </ApolloProvider>
  )
}

export default WrapWithProvider
