import { debug, editor, markdown } from "$sb/silverbullet-syscall/mod.ts";

export async function parsePageCommand() {
  console.log(
    "AST",
    JSON.stringify(
      await markdown.parseMarkdown(await editor.getText()),
      null,
      2,
    ),
  );
}

export async function resetClientCommand() {
  await debug.resetClient();
}

export async function reloadUICommand() {
  await editor.reloadUI();
}
