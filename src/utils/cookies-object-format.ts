import { parse, format } from 'date-fns';

export function getCookiesExpire(cookie: string) {
  for (const element of cookie.split(';')) {
    if (element.toLowerCase().trim().startsWith('expire')) {
      const expireDate = element.split('=').at(-1);
      const rawDate = expireDate?.split(',').at(-1);

      return rawDate?.trim();
    }
  }

  return null;
}

export function cookiesExpireDate(cookie: string) {
  const cookieRawDate = getCookiesExpire(cookie);

  if (cookieRawDate) {
    const parsedDate = parse(
      cookieRawDate,
      "dd MMM yyyy HH:mm:ss 'GMT'",
      new Date(),
      {},
    );

    const formatted = format(parsedDate, 'dd MMM yyyy HH:mm:ss') + 'Z';

    // FIX: the date already in UTC;

    const currentTime = new Date();
    const formattedDate = new Date(formatted);

    if (currentTime.getTime() > formattedDate.getTime()) {
      return true;
    }

    return false;
  }

  return false;
}
