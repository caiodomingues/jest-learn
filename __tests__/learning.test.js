function filterByName(arr, name) {
  if (!name || !arr.length) throw Error("Array/name cannot be empty");

  const reg = new RegExp(name, "i"); // turn it case-insensitive
  return arr.filter((el) => el.name.match(reg));
}

// Describe is a method for containing one or more related tests.
describe("filterByName function", () => {
  it("should filter by a search term", () => {
    const input = [
      { id: 1, name: "lorem" },
      { id: 2, name: "ipsum" },
    ];

    expect(filterByName(input, "lo")).toEqual([{ id: 1, name: "lorem" }]);
    expect(filterByName(input, "LO")).toEqual([{ id: 1, name: "lorem" }]);
  });
});
