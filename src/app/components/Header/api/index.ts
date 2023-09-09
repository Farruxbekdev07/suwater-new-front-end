import { gql } from '@apollo/client';

export const GET__USER_ID = gql`
  query getUser($ID: String!) {
    getUser(userId: $ID) {
      payload {
        firstName
        lastName
        address
        counterNumber
        phone
        password
      }
    }
  }
`;
