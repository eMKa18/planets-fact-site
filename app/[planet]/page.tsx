export default function Planet({
  params
}: {
  params: { planet: string }
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{params.planet}</div>
    </div>
  );
}
