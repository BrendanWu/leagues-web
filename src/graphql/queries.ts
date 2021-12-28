import { gql } from "@apollo/client";


export const MY_FIRST_QUERY = gql`
subscription MyQuery {
  game(order_by: {updated_at: desc}) {
    id
    status
    timeslot_date
    timeslot
    basketballCourt {
      title
    }
  }
}

  `;

  export const MY_SECOND_QUERY = gql`
  subscription MyQuery {
    game_player {
      players {
        name
        weight
        height
      }
    }
  }
  
  `