export type Hero = {
  isActive: boolean
  address: {
    planet: string
    city: string
  }
}

const addressHero: Hero['address'] = {
  planet: 'Earth',
  city: 'Cúcuta',
}

console.log(addressHero)
