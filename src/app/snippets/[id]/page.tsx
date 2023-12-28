import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetPage(props: SnippetShowPageProps) {
  // await new Promise((r) => setTimeout(r, 500));

  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) return notFound();

  return (
    <div className="flex flex-col gap-3 p-5">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg">{snippet?.title}</h3>
        </div>
        <div className="flex gap-3">
          <Link
            href={`${props.params.id}/edit`}
            className="p-2 border rounded hover:bg-red-200"
          >
            Edit
          </Link>
          <Link
            href={`${props.params.id}/delete`}
            className="p-2 border rounded hover:bg-red-200"
          >
            Delete
          </Link>
        </div>
      </div>
      <div className="bg-slate-200 rounded p-2 min-h-48">
        <pre className="font-mono">{snippet?.code}</pre>
      </div>
    </div>
  );
}
