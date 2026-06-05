"use client";

import { useEffect, useState } from "react";

export default function CollegesPage() {
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  async function fetchColleges() {
    const res = await fetch(
      `/api/colleges?search=${search}&location=${location}`
    );
    const data = await res.json();
    setColleges(data);
  }

  useEffect(() => {
    fetchColleges();
  }, [search, location]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Colleges</h1>

      {/* Filters */}
      <div className="flex gap-4 my-4">
        <input
          placeholder="Search college"
          className="border p-2"
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          placeholder="Location"
          className="border p-2"
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {/* List */}
      <div className="grid gap-4">
        {colleges.map((c: any) => (
          <a
            key={c.id}
            href={`/college/${c.id}`}
            className="border p-4 rounded"
          >
            <h2 className="font-bold">{c.name}</h2>
            <p>{c.location}</p>
            <p>Fees: ₹{c.fees}</p>
            <p>Rating: {c.rating}</p>
          </a>
        ))}
      </div>
    </div>
  );
}