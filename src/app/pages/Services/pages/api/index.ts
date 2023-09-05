import { gql } from '@apollo/client';

export const GET__EMPLOYEE = gql`
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
