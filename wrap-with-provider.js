import React from "react"
import { Provider } from "react-redux"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import createStore from "./src/state/createStore"

const WrapWithProvider = ({ element }) => {

  const store = createStore()

  const client = new ApolloClient({
    uri: process.env.APOLLO_CLIENT_URI,
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
