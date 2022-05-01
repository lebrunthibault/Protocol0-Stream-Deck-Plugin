const snakeCaseToSpaceCase = (str: string) => str.replace(/_/g, ' ')

function toTitleCase (str: string) {
    return str.replace(
        /\w\S*/g,
        (txt: string) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
    )
}

const titleMapping: { [key: string]: string; } = {
    Compressor: 'Comp'
}

const wordToLabel = function (word: string): string {
    if (word in titleMapping) {
        return titleMapping[word]
    } else {
        return word
    }
}

const toStreamDeckTitle = (str: string) => {
    const words = toTitleCase(snakeCaseToSpaceCase(str))
        .split(' ')
        .map(wordToLabel)

    return words.join('\n')
}

export { toStreamDeckTitle }
