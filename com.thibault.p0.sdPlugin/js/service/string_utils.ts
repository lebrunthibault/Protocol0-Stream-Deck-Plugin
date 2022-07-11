const snakeCaseToSpaceCase = (str: string) => str.replace(/_/g, ' ')

function toTitleCase (str: string) {
    return str.replace(
        /\w\S*/g,
        (txt: string) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
    )
}

const titleMapping: { [key: string]: string; } = {
    COMPRESSOR: 'Comp',
    PRO_Q_3: 'Pro-Q 3',
    FREE_CLIP: 'Clipper',
}

const toStreamDeckTitle = (word: string) => {
    if (word in titleMapping) {
        return titleMapping[word]
    }

    const title = toTitleCase(snakeCaseToSpaceCase(word))

    return title.split(' ').join('\n')
}

export { toStreamDeckTitle }
