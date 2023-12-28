import Link from "next/link";
import * as actions from "@/actions";

export default async function Home() {
  const snippets = await actions.fetchSnippets();
  console.log(snippets);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link
          className="p-2 border rounded hover:bg-blue-200"
          href="snippets/new"
        >
          New
        </Link>
      </div>
      {snippets.map((snippet) => (
        <>
          <Link
            href={`snippets/${snippet.id}`}
            className="flex justify-between items-center p-2 my-2 border rounded hover:bg-blue-200"
          >
            <span>{snippet.title}</span>
            <span className="text-sm">View</span>
          </Link>
        </>
      ))}
    </div>
  );
}
