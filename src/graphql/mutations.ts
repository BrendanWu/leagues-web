import { gql } from "@apollo/client";

export const CREATE_GAME = gql`
mutation MyMutation {
    insert_game_one(object: {court_id: "57fc2932-2e1e-435a-b36e-9368baef5a9a", player_host: "049390c6-7bc5-4807-97f3-e6916ea3ab35", status: "starting", timeslot: "10am-11am", timeslot_date: "12-20-20"}) {
      status
      timeslot
      timeslot_date
      basketballCourt {
        title
      }
    }
  }
`;