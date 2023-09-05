import { gql } from '@apollo/client';

export const GET__USER = gql`
  query getUsers($size: Int!, $page: Int!) {
    getUsers(size: $size, page: $page) {
      payload {
        firstName
        lastName
        address
        counterNumber
        phone
        password
        _id
      }
    }
  }
`;
