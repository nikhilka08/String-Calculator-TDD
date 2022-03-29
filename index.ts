export default function add(numberStr: string): number {
  if (numberStr === "") {
    return 0;
  }
  if (customDelimiterPresent(numberStr)) {
    const delimiter = getDelimiter(numberStr);
    const values = formatStringByDelimiter(delimiter, numberStr);
    return calculateSum(values);
  } else {
    let numberData = numberStr.split(/,|\n/g);
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
function calculateSum(numberData: Array<string>) {
  let sum = numberData.reduce((a, b) => a + parseInt(b), 0);
  return sum;
}
