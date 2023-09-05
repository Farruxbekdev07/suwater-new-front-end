import { gql } from '@apollo/client';

export const CREATE__USER = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $phone: String!
    $password: String!
    $counterNumber: Int!
    $address: String!
  ) {
    createUser(
      user: {
        firstName: $firstName
        lastName: $lastName
        phone: $phone
        password: $password
        counterNumber: $counterNumber
        address: $address
      }
    ) {
      payload {
        firstName
        lastName
        phone
        password
        counterNumber
        address
      }
    }
  }
`;
