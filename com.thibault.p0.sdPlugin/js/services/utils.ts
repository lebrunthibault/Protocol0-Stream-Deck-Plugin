const snakeCaseToSpaceCase = (str: string) => str.replace(/_/g, ' ')

function toTitleCase (str: string) {
  return str.replace(
    /\w\S*/g,
    (txt: string) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
  )
}

const toStreamDeckTitle = (str: string) => toTitleCase(snakeCaseToSpaceCase(str)).split(' ').join('\n')

export { toStreamDeckTitle }
