import { gql } from "@apollo/client";


export const MY_FIRST_QUERY = gql`
subscription MyQuery {
    game {
      id
      status
    }
  }
  `;
