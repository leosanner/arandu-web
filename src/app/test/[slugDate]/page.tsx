import { DisplayClickedDayEvents } from '@/components/DisplayClickedDayEvents';
import { getSlugDateEventsDAL } from '@/data-access-layer/event';

type SlugDateProps = {
  params: Promise<{ slugDate: string }>;
};

export default async function SlugDate({ params }: SlugDateProps) {
  const { slugDate } = await params;
  const events = await getSlugDateEventsDAL(slugDate);

  return <DisplayClickedDayEvents events={events} />;
}
