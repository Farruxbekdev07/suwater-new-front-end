import { gql } from '@apollo/client';

export const GET_MESSAGE = gql`
  query getAnnouncements($size: Int!, $page: Int!) {
    getAnnouncements(size: $size, page: $page) {
      payload {
        _id
        title
        description
        image
      }
    }
  }
`;

export const DELETE_ANNOUNCEMENT = gql`
  mutation deleteAnnouncement($Id: ID!) {
    deleteAnnouncement(id: $Id) {
      payload {
        _id
        title
        description
        image
      }
    }
  }
`;
