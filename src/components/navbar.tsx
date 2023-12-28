import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-blue-50 flex items-center justify-center gap-5 p-2">
      <Link className="p-2 bg-slate-50 rounded " href="/">
        Home
      </Link>
      <Link className="p-2 bg-slate-50 rounded " href="/snippets/new">
        New
      </Link>
    </div>
  );
}
