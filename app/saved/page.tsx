"use client";

import { useEffect, useState } from "react";

export default function SavedPage() {
  const [saved, setSaved] = useState([]);

  async function fetchSaved() {
    const token = localStorage.getItem("token");

    const res = await fetch("/api/bookmark", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setSaved(data);
  }

  useEffect(() => {
    fetchSaved();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Saved Colleges</h1>

      <div className="grid gap-4 mt-4">
        {saved.map((b: any) => (
          <div key={b.id} className="border p-4 rounded">
            <h2 className="font-bold">{b.college.name}</h2>
            <p>{b.college.location}</p>
            <p>Fees: ₹{b.college.fees}</p>
            <button
  onClick={async () => {
    const token = localStorage.getItem("token");

    await fetch("/api/bookmark", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ collegeId: c.id }),
    });

    alert("Saved!");
  }}
  className="mt-2 bg-blue-500 text-white px-2 py-1"
>
  Save
</button>
          </div>
        ))}
      </div>
    </div>
  );
}