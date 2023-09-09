import { gql } from '@apollo/client';

export const SIGN__IN = gql`
  query signIn($phone: String!, $password: String!) {
    signIn(phone: $phone, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
