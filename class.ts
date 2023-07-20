class Person {
  constructor (public name:string ) {
    this.name = name
  }

  greet():string {
    return `Hello, my name is ${this.name}!`
  }
}

const john = new Person('John Andrey')
console.log(john.greet())