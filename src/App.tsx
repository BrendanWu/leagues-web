import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import ThemeProvider from "./ThemeProvider";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import client from './graphql/client';
function App() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ThemeProvider />
        </PersistGate>
      </Provider>
      </ApolloProvider>
    </div>
  );
}

export default App;
