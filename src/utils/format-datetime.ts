import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDatetime(inputDate: string): string {
  const date = new Date(inputDate);

  return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
    locale: ptBR,
  });
}
