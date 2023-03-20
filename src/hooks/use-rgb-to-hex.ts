const hexDigits = new Array(
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f"
);

const hex = (x: any) => {
  return isNaN(x) ? "00" : hexDigits[(x - (x % 16)) / 16] + hexDigits[x % 16];
};

const rgb2hex = (rgb: string) => {
  const newRgb: string[] | null = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return "#" + hex(newRgb?.[1]) + hex(newRgb?.[2]) + hex(newRgb?.[3]);
};


export default rgb2hex;