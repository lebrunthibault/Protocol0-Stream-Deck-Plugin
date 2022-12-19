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
    VALHALLA_VINTAGE_VERB: 'Reverb',
    INSERT_DELAY: 'Delay',
    INSERT_REVERB: 'Reverb',
    INSERT_DRY_WET: 'Dry / Wet'
}

const toStreamDeckTitle = (word: string) => {
    if (word in titleMapping) {
        return titleMapping[word]
    }

    let words = word.split(/[\s-]+/).map(w => w.trim())
    const excludedWords = ['-']
    words = words.filter(w => !excludedWords.includes(w))

    const title = words.join('\n')
    return toTitleCase(snakeCaseToSpaceCase(title))
}

export { toStreamDeckTitle }
