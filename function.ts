const greeting = (name: string): string => {
  return `Hello ${name}!`
}

console.log(greeting('John'))

export function greet (name: string): string {
  return `Hello ${name}!`
}