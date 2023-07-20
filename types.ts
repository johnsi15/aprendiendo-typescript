type Employee = {
  name: string
  role: string
}

const personEmpleyoee = ({name, role }: Employee):string => {
  console.log(name, role)
  return name
}