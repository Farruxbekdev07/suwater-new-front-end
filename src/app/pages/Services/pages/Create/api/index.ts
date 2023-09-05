import { gql } from '@apollo/client';

export const CREATE__EMPLOYEE = gql`
  mutation createEmployee(
    $name: String!
    $surName: String!
    $lastName: String!
    $address: String!
    $position: String!
    $startedWorkAt: String!
    $isSupperAdmin: Boolean
    $phone: String!
    $password: String!
  ) {
    createEmployee(
      data: {
        name: $name
        surName: $surName
        lastName: $lastName
        address: $address
        position: $position
        startedWorkAt: $startedWorkAt
        isSupperAdmin: $isSupperAdmin
        phone: $phone
        password: $password
      }
    ) {
      token
    }
  }
`;
