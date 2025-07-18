import { HelloFunctionType } from "./types";

export function helloFunction({ firstName, lastName, age }: HelloFunctionType) {
  console.log("Hello there from HelloFunction");
  console.log(`Hello ${firstName} ${lastName} !!!`);
  console.log(`Your age is ${age} !!!`);
}
