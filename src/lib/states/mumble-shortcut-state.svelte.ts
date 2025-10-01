import { getItem, setItem } from '$lib/services/local-storage.service';
import type { Shortcut } from '$lib/types/shortcut.type';

export interface ShortcutState {
  shortcuts: Shortcut[];
  loading: boolean;
  error: string | null;
}

const shortcutState = $state<ShortcutState>({
  shortcuts: [],
  loading: false,
  error: null,
});

export function addShortcut(shortcut: Shortcut) {
  shortcutState.shortcuts.push(shortcut);
  setItem("mumbleShortcuts", JSON.stringify(shortcutState.shortcuts));
};

export function removeShortcut(id: string) {
  shortcutState.shortcuts = shortcutState.shortcuts.filter((shortcut: Shortcut) => shortcut.id !== id);
  setItem("mumbleShortcuts", JSON.stringify(shortcutState.shortcuts));
};

export function updateShortcut(shortcut: Shortcut) {
  shortcutState.shortcuts = shortcutState.shortcuts.map((existingShortcut: Shortcut) => existingShortcut.id === shortcut.id ? shortcut : existingShortcut);
  setItem("mumbleShortcuts", JSON.stringify(shortcutState.shortcuts));
};

export function updateShortcuts(shortcuts: Shortcut[]) {
  shortcutState.shortcuts = shortcuts;
  setItem("mumbleShortcuts", JSON.stringify(shortcutState.shortcuts));
};

export function getShortcuts() {
  if (shortcutState.shortcuts.length === 0) {
    shortcutState.shortcuts = JSON.parse(getItem("mumbleShortcuts") ?? "[]") as Shortcut[];
  }
  return shortcutState.shortcuts;
};