import { Calendar } from '@/components/Calendar';
import { UserHeader } from '@/components/UserHeader';
import { DateContextProvider } from '@/context/DateContext';

export default function TestPage() {
  return (
    <>
      <UserHeader />
      <DateContextProvider>
        <Calendar />
      </DateContextProvider>
    </>
  );
}
