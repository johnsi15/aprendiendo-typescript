const languages: string[] = ['JavaScript', 'TypeScript']
const languages2: (string | number)[] = []

languages.push('C#')
languages.push('Java')
languages.push('Python')

languages2.push('TypeScript')
languages2.push(1)

export type Course = {
  language: string[]
  price: number
  title: string
  description: string
  date: Date
}

const listCourses: Course[] = []

console.log(listCourses)

listCourses.push({
  language: ['JavaScript', 'TypeScript'],
  price: 100,
  title: 'Curso de JavaScript',
  description: 'Curso de JavaScript',
  date: new Date(2022, 5, 23),
})

// type CellValue = 'X' | 'O' | ''

// const gameBoard: CellValue[][] = [
//   ['X', 'O', 'O'],
//   ['O', '', 'X'],
//   ['X', 'O', 'X'],
// ]

// gameBoard[0][2] = 'X'

type CellValue = 'X' | 'O' | ''
type GameBoard = [
  // tuplas
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard = [
  ['X', 'O', 'O'],
  ['O', '', 'X'],
  ['X', 'O', 'X'],
]

gameBoard[0][2] = 'X'

// tuplas
// type State = [string, (newValue: string) => void]
// const [hero, setHero]: State = useState('Batman')

type Rgb = [number, number, number]
const rgb: Rgb = [2, 3, 5]
