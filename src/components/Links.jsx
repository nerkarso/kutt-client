import {
  Alert,
  Anchor,
  Badge,
  Container, Skeleton, Table
} from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { SHORT_BASE_URL } from '../config/env';
import { fetchLinks } from '../queries/fetchLinks';

export function Links() {
  return (
    <Container mt="md">
      <Table>
        <thead>
          <tr>
            <th>Short URL</th>
            <th style={{textAlign:'right'}}>Views</th>
          </tr>
        </thead>
        <tbody>
          <Renderer />
        </tbody>
      </Table>
    </Container>
  );
}

function Renderer() {
  const { isLoading, error, data } = useQuery(['links'], fetchLinks);

  if (isLoading)
    return (
      <>
        <tr>
          <td>
            <Skeleton height={16} width="70%" />
          </td>
          <td>
            <Skeleton height={16} width={40} />
          </td>
        </tr>
        <tr>
          <td>
            <Skeleton height={16} width="85%" />
          </td>
          <td>
            <Skeleton height={16} width={60} />
          </td>
        </tr>
        <tr>
          <td>
            <Skeleton height={16} width="45%" />
          </td>
          <td>
            <Skeleton height={16} width={30} />
          </td>
        </tr>
        <tr>
          <td>
            <Skeleton height={16} width="55%" />
          </td>
          <td>
            <Skeleton height={16} width={40} />
          </td>
        </tr>
      </>
    );

  if (error) {
    return (
      <Alert title="Error" color="red" mt="sm">
        {error?.message}
      </Alert>
    );
  }


  return (
    <>
       {data.data.map((item) => {
        const shortUrl = `${SHORT_BASE_URL}/${item.address}`;
        return (
          <tr key={item.id}>
            <td>
              <Anchor href={shortUrl} target="_blank" lineClamp={1}>
                {shortUrl}
              </Anchor>
            </td>
            <td width={60}>
              <Badge>{item.visit_count}</Badge>
            </td>
          </tr>
        );
      })}
    </>
  );
}
