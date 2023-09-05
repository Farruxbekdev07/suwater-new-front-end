import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { store } from 'store';

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = store.getState().auth.user.token;
  operation.setContext(
    ({ headers = { headers: { 'Content-Type': 'multipart/form-data' } } }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
        uniqueId: '378327232378@',
        platform: 'browser',
        fcmtoken: '1234',
        store: '123',
      },
    }),
  );
  return forward(operation);
});

const errorLink = onError(({ networkError, graphQLErrors = [] }) => {
  if (networkError) {
    if (networkError.message.includes('Failed to fetch')) {
      console.error('Please check your connection!');
    } else if (networkError.message.includes('401')) {
      // store.dispatch(authActions.logOut());
    }
  }
  if (
    graphQLErrors[0]?.message?.includes('invalid') ||
    graphQLErrors[0]?.message?.includes('jwt')
  ) {
    // store.dispatch(authActions.logOut());
    return;
  }
  if (graphQLErrors.length) {
    console.error(graphQLErrors[0].message);
  }
});
// const uploadLink = new HttpLink({ uri: process.env.REACT_APP_API_URL });
const uploadLink = new HttpLink({ uri: 'http://localhost:8000' });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([authMiddleware, errorLink, uploadLink]),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

export default client;
