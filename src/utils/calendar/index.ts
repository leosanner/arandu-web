import { format, Locale } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function titleCaseOneWord(word: string) {
  return word
    .split('')
    .map((w, idx) => {
      if (idx === 0) return w.toUpperCase();

      return w.toLowerCase();
    })
    .join('');
}

export function formatMonthName(date: Date, locale: Locale = ptBR) {
  return format(date, 'LLLL', {
    locale: locale,
  });
}
