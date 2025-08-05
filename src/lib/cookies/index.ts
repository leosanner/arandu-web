import { cookies } from 'next/headers';

export async function getCookies() {
  const _cookies = await cookies();

  return _cookies.get('token')?.value;
}
