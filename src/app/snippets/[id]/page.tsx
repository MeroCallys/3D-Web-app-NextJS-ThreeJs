import Link from "next/link";
import * as actions from "@/actions";
import { useRouter } from "next/router";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetPage(props: SnippetShowPageProps) {
  const snippet = await actions.fetchSnippet(parseInt(props.params.id));
  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div className="flex flex-col gap-3 p-5">
      <Link href="..">&#8592; back to the snippets</Link>
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

          <form action={deleteSnippetAction}>
            <button className="p-2 border rounded hover:bg-red-200">
              Delete
            </button>
          </form>
        </div>
      </div>
      <div className="bg-slate-200 rounded p-2 min-h-48">
        <pre className="font-mono">{snippet?.code}</pre>
      </div>
    </div>
  );
}
