import { gql } from '@apollo/client';

export const CREATE__APPEAL = gql`
  mutation createAppeal(
    $image: String!
    $user: ID!
    $status: String!
    $location: String!
    $description: String!
  ) {
    createAppeal(
      appeal: {
        user: $user
        status: $status
        description: $description
        image: $image
        location: $location
      }
    ) {
      payload {
        user
      }
    }
  }
`;
