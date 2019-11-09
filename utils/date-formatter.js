const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const formatDate = input => {
  const date = new Date(input)
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  return `${month} ${year}`
}

module.exports = formatDate
