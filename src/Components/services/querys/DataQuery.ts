import { gql } from "@apollo/client";

const DATA_QUERY = gql`
  query CharactersQuery($filter: FilterCharacter) {
    characters(filter: $filter) {
      info {
        count
      }
      results {
        id
        name
        image
        episode {
          id
          name
        }
      }
    }
  }
`;

export { DATA_QUERY };
