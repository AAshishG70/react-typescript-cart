// const newObj = {
//   name: "Alex",
//   age: 24,
// };

// interface SomeInterface {
//   alex: string;
//   age: number;
// }

// type TypeofKeys = keyof SomeInterface;

// const myName: TypeofKeys = "alex";

interface ThemeInterface {
  colors: { [key in keyof typeof colors]: string };
  breakpoints: { [key in keyof typeof breakpoints]: string };
}
// The above expression is similar to the example below:
// for (let key in [1, 2, 3, 4]) {
//   console.log = key;
// }

const colors = {
  primary: "red",
  secondary: "blue",
};

const breakpoints = {
  desktop: "1024px",
  tablet: "768px",
  mobile: "480px",
};
const theme: ThemeInterface = { colors, breakpoints };

export default { theme };