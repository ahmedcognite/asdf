export class LocalStorageMock {
  store: Record<string, string | null>;
  length: number;

  constructor() {
    this.store = {};
    this.length = 0;
  }

  key(index: number) {
    return Object.keys(this.store)[index];
  }

  clear() {
    this.store = {};
    this.length = 0;
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value: string | null) {
    this.store[key] = value;
  }

  removeItem(key: string) {
    delete this.store[key];
  }
}
