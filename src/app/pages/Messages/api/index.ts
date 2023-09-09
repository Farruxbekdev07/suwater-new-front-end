import { gql } from '@apollo/client';

export const GET_MESSAGE = gql`
  query getAnnouncements($size: Int!, $page: Int!) {
    getAnnouncements(size: $size, page: $page) {
      payload {
        title
        description
        image
      }
    }
  }
`;
