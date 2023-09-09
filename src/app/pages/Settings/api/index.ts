import { gql } from '@apollo/client';

export const UPDATE__USER = gql`
  mutation updateUser(
    $firstName: String!
    $lastName: String!
    $address: String!
    $counterNumber: Int!
    $phone: String!
    $ID: String!
  ) {
    updateUser(
      data: {
        firstName: $firstName
        lastName: $lastName
        address: $address
        counterNumber: $counterNumber
        phone: $phone
      }
      userId: $ID
    ) {
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
