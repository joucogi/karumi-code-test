import Storage from "@/contracts/storage";

export default class MemoryStorage implements Storage {
  private _data: {
    name: string;
    value: string;
  }[] = [];

  setItem(name: string, value: string): void {
    const element = this._data.find(item => item.name === name);

    if (element === undefined) {
      this._data.push({
        name,
        value
      });

      return;
    }

    this._data.map(item => (item.name === name ? value : item.value));
  }

  getItem(name: string): string | null {
    const element = this._data.find(item => item.name === name);

    return element !== undefined ? element.value : null;
  }

  removeItem(name: string): void {
    this._data = this._data.filter(item => item.name !== name);
  }
}
