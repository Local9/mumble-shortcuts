export function getItem(key: string): string | null {
  if (typeof localStorage === "undefined") {
    return null;
  }
	return localStorage.getItem(key);
}

export function setItem(key: string, value: string): void {
  if (typeof localStorage === "undefined") {
    return;
  }
	localStorage.setItem(key, value);
}

export function removeItem(key: string): void {
  if (typeof localStorage === "undefined") {
    return;
  }
	localStorage.removeItem(key);
}

export function clear(): void {
  if (typeof localStorage === "undefined") {
    return;
  }
	localStorage.clear();
}
