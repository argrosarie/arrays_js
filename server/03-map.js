const orders = [
  {
    customerName: 'Leonardo',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Nicolás',
    total: 120,
    delivered: false,
  },
  {
    customerName: 'Sebastián',
    total: 180,
    delivered: true,
  },
  {
    customerName: 'Ezequiel',
    total: 240,
    delivered: true,
  },
  {
    customerName: 'Sebas',
    total: 290,
    delivered: false,
  },
  {
    customerName: 'Bruno',
    total: 1000,
    delivered: true,
  },
]

console.log('array original', orders)

const rta = orders.map((item) => item.total)

console.log('respuesta', rta)

const rta2 = orders.map((item) => {
 
  return { ...item,
            tax: .19 }
})

console.log('resputa 2', rta2)
console.log('array original', orders)
