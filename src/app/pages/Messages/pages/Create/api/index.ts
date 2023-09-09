import { gql } from '@apollo/client';

export const CREATE__MESSAGE = gql`
  mutation createAnnouncement(
    $image: String
    $title: String!
    $description: String!
  ) {
    createAnnouncement(
      announcement: { title: $title, description: $description, image: $image }
    ) {
      payload {
        title
        description
      }
    }
  }
`;
