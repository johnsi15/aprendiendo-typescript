const person = {
  name: 'John Serrano',
  age: 30,
}

person.name.split(' ')

let text = 'Hello world'
// text = 3

function saludar(name: string) {
  name.length
  return `Hello ${name}`
}

function greet (name: string): string {
  return `Hello, ${name}`
}

console.log(greet('Andrey'))