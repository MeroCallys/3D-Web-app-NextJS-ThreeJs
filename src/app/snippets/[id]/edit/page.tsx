import SnippetEditForm from "@/components/snippets-edit-form";
import * as actions from "@/actions";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const id = parseInt(props?.params.id);
  const snippet = await actions.fetchSnippet(id);

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
