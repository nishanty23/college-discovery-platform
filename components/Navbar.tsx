import Link from "next/link";

export default function Navbar() {
  return (
    <div className="p-4 border-b flex gap-4">
      <Link href="/colleges">Colleges</Link>
      <Link href="/saved">Saved</Link>
    </div>
  );
}