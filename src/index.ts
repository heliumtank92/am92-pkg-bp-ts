export function sayHi(): void {
  console.log('Hello World from Named Export!')
}

export default function sayHiDefault(): void {
  console.log('Hello World from Default Export!')
}

export const arrowFunc = (): number => 1
