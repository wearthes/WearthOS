export default function Dashboard() {
  const scores = [
    { name: "Alignment", score: 72 },
    { name: "Awareness", score: 41 },
    { name: "Assets", score: 56 },
    { name: "Activities", score: 63 },
    { name: "Accountability", score: 58 },
  ];

  return (
    <main className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">WearthOS Dashboard</h1>

      <div className="grid grid-cols-5 gap-4">
        {scores.map((item) => (
          <div key={item.name} className="p-4 border rounded-xl">
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-2xl">{item.score}%</p>
          </div>
        ))}
      </div>

      <div className="p-6 border rounded-xl">
        <h2 className="text-xl font-bold">Next Strategic Sprint</h2>
        <p className="mt-2">Awareness Engine</p>
        <ul className="list-disc ml-5 mt-2">
          <li>Launch newsletter</li>
          <li>Create content plan</li>
          <li>Grow audience</li>
        </ul>
      </div>
    </main>
  );
}
