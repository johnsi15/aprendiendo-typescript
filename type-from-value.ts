const address = {
  planet: 'Earth',
  city: 'Cúcuta',
}

export type Address = typeof address

const addressHero: Address = {
  planet: 'Mars',
  city: 'Cúcuta',
}

console.log(addressHero)
