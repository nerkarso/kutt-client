import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

function fetchLinks() {
  return fetch(
    'https://kutt.it/api/v2/links?all=false&limit=10&search=&skip=0',
    {
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJBcGlBdXRoIiwic3ViIjoiZGV0ZWNsb3dAZ21haWwuY29tIiwiZG9tYWluIjoiIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2NzgxMTI3NjgsImV4cCI6MTY3ODcxNzU2OH0.4yS0P4aDAKZSzxAVOwVrxROP3WtUqJOVVY0aiU2QwZs',
        cookie:
          'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJBcGlBdXRoIiwic3ViIjoiZGV0ZWNsb3dAZ21haWwuY29tIiwiZG9tYWluIjoiIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2NzgxMTI3NjgsImV4cCI6MTY3ODcxNzU2OH0.4yS0P4aDAKZSzxAVOwVrxROP3WtUqJOVVY0aiU2QwZs',
      },
    }
  ).then((res) => res.json());
}

function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['links'],
    queryFn: fetchLinks,
  });

  console.log('Data', data);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return <div></div>;
}

export default App;
