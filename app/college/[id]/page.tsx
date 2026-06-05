async function getCollege(id: string) {
  const res = await fetch(
    `http://localhost:3000/api/colleges/${id}`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function CollegeDetail({
  params,
}: {
  params: { id: string };
}) {
  const college = await getCollege(params.id);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{college.name}</h1>

      <p className="mt-2">{college.overview}</p>

      <div className="mt-4">
        <p><b>Location:</b> {college.location}</p>
        <p><b>Fees:</b> ₹{college.fees}</p>
        <p><b>Rating:</b> {college.rating}</p>
        <p><b>Courses:</b> {college.courses}</p>
        <p><b>Placements:</b> {college.placements}</p>
      </div>
    </div>
  );
}