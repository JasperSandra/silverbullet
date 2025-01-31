import { editor } from "$sb/silverbullet-syscall/mod.ts";
import { store } from "$sb/plugos-syscall/mod.ts";

// Run on "editor:init"
export async function setEditorMode() {
  if (await store.get("vimMode")) {
    await editor.setUiOption("vimMode", true);
  }
  if (await store.get("darkMode")) {
    await editor.setUiOption("darkMode", true);
  }
}

export async function toggleDarkMode() {
  let darkMode = await store.get("darkMode");
  darkMode = !darkMode;
  await editor.setUiOption("darkMode", darkMode);
  await store.set("darkMode", darkMode);
}

export async function foldCommand() {
  await editor.fold();
}

export async function unfoldCommand() {
  await editor.unfold();
}

export async function toggleFoldCommand() {
  await editor.toggleFold();
}

export async function foldAllCommand() {
  await editor.foldAll();
}

export async function unfoldAllCommand() {
  await editor.unfoldAll();
}

export async function centerCursorCommand() {
  const pos = await editor.getCursor();
  await editor.moveCursor(pos, true);
}

export async function moveToPosCommand() {
  const posString = await editor.prompt("Move to position:");
  if (!posString) {
    return;
  }
  const pos = +posString;
  await editor.moveCursor(pos);
}
