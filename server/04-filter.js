const colors = ['yellow', 'blue', 'green', 'black', 'white']

const newArray = []
for (let i = 0; i < colors.length; i++) {
  const item = colors[i]
  if (item.length >= 5) {
    newArray.push(item)
  }
}
// console.log(newArray, "I was made with a for")

const temp = colors.filter(item => item.length >= 5)
// console.log(temp, "I was made with a filter")


const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

  const temp2 = orders.filter(item => item.delivered == true && item.total >= 100)
//   console.log(temp2)

  const searcher = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
  }

  console.log(searcher("V"))