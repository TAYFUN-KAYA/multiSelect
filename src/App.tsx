import "./App.css";
import CustomDropdownPage from "./pages/CustomDropdownPage";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <CustomDropdownPage />
    </ApolloProvider>
  );
}

export default App;
