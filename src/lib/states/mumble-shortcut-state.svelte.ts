import { getItem, setItem } from '$lib/services/local-storage.service';
import type { Shortcut } from '$lib/types/shortcut.type';

export interface ShortcutState {
  shortcuts: Shortcut[];
  loading: boolean;
  error: string | null;
}

export const shortcutState = $state<ShortcutState>({
  shortcuts: [],
  loading: false,
  error: null,
});

export function addShortcut(shortcut: Shortcut) {
  shortcutState.loading = true;
  shortcutState.shortcuts = [...shortcutState.shortcuts, shortcut];
  setItem("mumbleShortcuts", JSON.stringify(shortcutState.shortcuts));
  shortcutState.loading = false;
};

export function removeShortcut(id: string) {
  shortcutState.loading = true;
  shortcutState.shortcuts = shortcutState.shortcuts.filter((shortcut: Shortcut) => shortcut.id !== id);
  setItem("mumbleShortcuts", JSON.stringify(shortcutState.shortcuts));
  shortcutState.loading = false;
};

export function updateShortcut(shortcut: Shortcut) {
  shortcutState.loading = true;
  shortcutState.shortcuts = shortcutState.shortcuts.map((existingShortcut: Shortcut) => existingShortcut.id === shortcut.id ? shortcut : existingShortcut);
  setItem("mumbleShortcuts", JSON.stringify(shortcutState.shortcuts));
  shortcutState.loading = false;
};

export function updateShortcuts(shortcuts: Shortcut[]) {
  shortcutState.loading = true;
  shortcutState.shortcuts = shortcuts;
  setItem("mumbleShortcuts", JSON.stringify(shortcutState.shortcuts));
  shortcutState.loading = false;
};

export function getShortcuts() {
  shortcutState.loading = true;
  if (shortcutState.shortcuts.length === 0) {
    shortcutState.shortcuts = JSON.parse(getItem("mumbleShortcuts") ?? "[]") as Shortcut[];
  }
  shortcutState.loading = false;
  return shortcutState.shortcuts;
};