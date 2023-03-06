import { API_BASE_URL } from '../config/env';
import { fetcher } from '../utils/fetcher';

export function fetchLinks() {
  return fetcher(`${API_BASE_URL}/links?all=false&limit=10&search=&skip=0`);
}
