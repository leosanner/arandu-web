type EventPageIdProps = {
  params: Promise<{
    id: number;
  }>;
};

export default async function EventPageId({ params }: EventPageIdProps) {
  const idNumber = (await params).id;

  return <div>Page for id: {idNumber}</div>;
}
