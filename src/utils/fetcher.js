import { ACCESS_TOKEN } from '../config/env';

export function fetcher(url) {
  return fetch(url, {
    headers: {
      authorization: ACCESS_TOKEN,
    },
  }).then((res) => res.json());
}
