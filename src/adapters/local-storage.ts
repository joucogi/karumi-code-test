import Storage from "@/contracts/storage";

export default class LocalStorage implements Storage {
  setItem(name: string, value: string): void {
    localStorage.setItem(name, value);
  }

  getItem(name: string): string | null {
    return localStorage.getItem(name);
  }

  removeItem(name: string): void {
    localStorage.removeItem(name);
  }
}
