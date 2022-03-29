export default function add(numberStr: string): number {
  if (numberStr === "") {
    return 0;
  }
  let numberData = numberStr.split(/,|\n/g);
  let sum =  numberData.reduce((a, b) => a + parseInt(b), 0);
  return sum;
}
