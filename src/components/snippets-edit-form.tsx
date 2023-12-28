"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import * as actions from "@/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: String = "") => {
    setCode(value as string | null);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div className="flex flex-col gap-4 my-5">
      <h2 className="font-bold text-gray-600">{snippet.title}</h2>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={`${code}`}
        options={{
          minimap: {
            enabled: false,
          },
        }}
        onChange={handleEditorChange}
      />
      <form
        action={editSnippetAction}
        className="flex justify-center items-center"
      >
        <button type="submit" className="border p-2 rounded bg-blue-200">
          Save
        </button>
      </form>
    </div>
  );
}
