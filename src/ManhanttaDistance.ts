export class ManhattanDistance {
  calculateDistance(input1: number[], input2: number[]): number {
    let output = 0;
    output = Math.abs(input1[0] - input2[0]) + Math.abs(input1[1] - input2[1]);
    return output;
  }
}
