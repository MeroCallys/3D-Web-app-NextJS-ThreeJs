"use client";

import Editor from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  // function handleEditorChange = (value: String = "") => {
  //   console.log()
  // }
  console.log(snippet);
  return (
    <div className="flex flex-col gap-4 my-5">
      <h2 className="font-bold text-gray-600">{snippet.title}</h2>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{
          minimap: {
            enabled: false,
          },
        }}
        // onChange={handleEditorChange}
      />
      <button className="border p-2 rounded bg-blue-200">Save</button>
    </div>
  );
}
