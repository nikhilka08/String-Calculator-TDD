export default function add(numberStr: string): number {
  if (numberStr === "") {
    return 0;
  }
  if (customDelimiterPresent(numberStr)) {
    const delimiter = getDelimiter(numberStr);
    const values = formatStringByDelimiter(delimiter, numberStr);
    const negNumbers = negativeNumberPresent(values);
    if (negNumbers.length) {
      throw new Error(`negatives not allowed ${negNumbers.toString()}`);
    }
    return calculateSum(values);
  } else {
    let numberData = numberStr.split(/,|\n/g);
    const negNumbers = negativeNumberPresent(numberData);
    if (negNumbers.length) {
      throw new Error(`negatives not allowed ${negNumbers.toString()}`);
    }
    return calculateSum(numberData);
  }
}

function formatStringByDelimiter(delimiter, str) {
  const items = str.replace(`//${delimiter}`, "").replace(/([\n])+/g, "");
  return items.split(delimiter);
}

function customDelimiterPresent(numberStr) {
  return /^\/\//.test(numberStr);
}

function getDelimiter(numberStr) {
  return numberStr.charAt(2);
}

function negativeNumberPresent(data) {
  const negativeNumnbers = data.filter((number) => parseInt(number) < 0);
  return negativeNumnbers;
}

function calculateSum(numberData: Array<string>) {
  let sum = numberData.reduce((a, b) => a + parseInt(b), 0);
  return sum;
}
