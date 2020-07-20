import MemoryStorage from "@/adapters/memory-storage";

let storage: MemoryStorage;

beforeEach(() => {
  storage = new MemoryStorage();
});

describe("For MemoryStorage Adapter", () => {
  it("get value that does not exist", () => {
    const value = storage.getItem("lalaalala");
    expect(value).toBe(null);
  });

  it("get value that exists", () => {
    const name = "lalalalala";
    const value = "lorolololo";
    storage.setItem(name, value);
    expect(storage.getItem(name)).toBe(value);
  });

  it("get value that is removed previosly", () => {
    const name = "lalalalala";
    const value = "lorolololo";
    storage.setItem(name, value);
    storage.removeItem(name);
    expect(storage.getItem(name)).toBe(null);
  });
});
