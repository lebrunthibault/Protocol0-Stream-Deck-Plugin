const snakeCaseToSpaceCase = (str: string) => str.replace(/_/g, ' ')

function toTitleCase (str: string) {
    return str.replace(
        /\w\S*/g,
        (txt: string) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
    )
}

const titleMapping: { [key: string]: string; } = {
    AUTO_FILTER_HIGH_PASS: 'HPF',
    AUTO_FILTER_LOW_PASS: 'LPF',
    COMPRESSOR: 'Comp',
    FREE_CLIP: 'Clipper',
    PRO_Q_3: 'Pro-Q 3',
    VALHALLA_VINTAGE_VERB: 'Reverb'
}

const toStreamDeckTitle = (word: string) => {
    if (word in titleMapping) {
        return titleMapping[word]
    }

    const title = toTitleCase(snakeCaseToSpaceCase(word))

    return title.split(' ').join('\n')
}

export { toStreamDeckTitle }
