const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const formatDate = input => {
  const date = new Date(input)
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  return `${month} ${year}`
}

module.exports = formatDate
