export default function Portfolio() {
  const businesses = [
    {
      name: "Okavango Brewing",
      score: 61,
      weakest: "Awareness",
      focus: "Audience Growth",
      status: "Needs Focus",
    },
    {
      name: "Training Lab",
      score: 68,
      weakest: "Assets",
      focus: "Build Courses",
      status: "On Track",
    },
    {
      name: "AccPro",
      score: 52,
      weakest: "Accountability",
      focus: "Assign Ownership",
      status: "At Risk",
    },
  ];

  return (
    <main className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">WearthOS Portfolio</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {businesses.map((biz) => (
          <div
            key={biz.name}
            className="p-6 border rounded-xl hover:shadow cursor-pointer"
          >
            <h2 className="text-xl font-semibold">{biz.name}</h2>
            <p className="mt-2">Score: {biz.score}</p>
            <p>Weakest: {biz.weakest}</p>
            <p>Focus: {biz.focus}</p>
            <p className="mt-2 text-sm text-gray-500">{biz.status}</p>
          </div>
        ))}
      </div>
    </main>
  );
}