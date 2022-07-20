import { ManhattanDistance } from "./ManhanttaDistance";

describe("ManhattanDistance", () => {
  const manhattanDistance = new ManhattanDistance();

  describe("Correct calculation", () => {
    it("The calculation is correct", () => {
      expect(manhattanDistance.calculateDistance([1, 1], [1, 1])).toBe(0);
      expect(manhattanDistance.calculateDistance([5, 4], [3, 2])).toBe(4);
      expect(manhattanDistance.calculateDistance([1, 1], [0, 3])).toBe(3);
    });
  });
});
