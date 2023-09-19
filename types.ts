type Employee = {
  name: string
  role: string
}

const personEmpleyoee = ({ name, role }: Employee): string => {
  console.log(name, role)
  return name
}

const employee = 'John Andrey'

if (typeof employee === 'string') {
  console.log('Si es un string')
}
