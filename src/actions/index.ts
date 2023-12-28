"use server";

import { db } from "@/db";
import { notFound, redirect } from "next/navigation";

export async function fetchSnippets() {
  const snippets = await db.snippet.findMany();
  return snippets;
}

export async function fetchSnippet(id: number) {
  await new Promise((r) => setTimeout(r, 500));

  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });
  if (!snippet) return notFound();
  return snippet;
}

export async function createSnippet(formData: FormData) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;
  await db.snippet.create({
    data: {
      title,
      code,
    },
  });

  redirect("/");
}
export async function editSnippet(id: number, code: string | null) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  redirect("/");
}
