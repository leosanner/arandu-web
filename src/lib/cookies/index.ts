import { cookies } from 'next/headers';
import { COOKIE_NAME } from '../consts';

export async function getCookies() {
  const _cookies = await cookies();

  return _cookies.get(COOKIE_NAME)?.value;
}
