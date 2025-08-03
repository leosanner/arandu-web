import { headers } from 'next/headers';

export default async function TestPage() {
  const h = await headers();
  console.log(h.entries);
  console.log();
  const cookie = (await h).get('cookie');
  console.log(cookie);

  const cookies = async () => {
    if (cookie) {
      const request = fetch('http://localhost:8080/user/cookies', {
        method: 'GET',
        headers: {
          Cookie: cookie,
        },
      });

      return (await request).text();
    }
  };

  const val = await cookies();

  console.log(val);
  return <div>{val ? <p>{val}</p> : <p>vazio</p>}</div>;
}
