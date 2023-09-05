import { gql } from '@apollo/client';

export const SIGN__UP = gql`
  query signIn($phone: String!, $password: String!) {
    signIn(phone: $phone, password: $password) {
      token
    }
  }
`;
