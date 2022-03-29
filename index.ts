export default function add(numberStr: string): number {
  if (numberStr === "") {
    return 0;
  }
  return parseInt(numberStr);
}
