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

function createAddress() {
  return {
    planet: 'Earth',
    city: 'Cúcuta',
  }
}
// Extraemos los types del return function
export type AddressFunction = ReturnType<typeof createAddress>
