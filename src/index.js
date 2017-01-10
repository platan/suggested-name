function median(values) {
    var half = Math.floor(values.length / 2);

    values.sort((a, b) => a - b);
    if (values.length % 2) {
        return values[half];
    } else {
        return (values[half - 1] + values[half]) / 2.0;
    }
}

function mostFrequent(array) {
    return array.sort((a, b) =>
        array.filter(v => v === a).length - array.filter(v => v === b).length
    ).pop();
}

function group(map, key, value) {
    let values = map.has(key) ? map.get(key).concat(value) : [value];

    map.set(key, values);
};

export default function suggestedName(names, excludedCharacters = []) {
    const wordPositions = new Map();
    const wordVersions = new Map();

    excludedCharacters.forEach((char) => {
        names = names.map(name => name.replace(char, ''));
    });
    names.map(name => name.replace(/ {2,}/g, ' '))
        .forEach(name => {
            [...new Set(name.split(' '))]
            .forEach((word, index) => {
                const lowerCaseValue = word.toLowerCase();

                group(wordPositions, lowerCaseValue, index + 1);
                group(wordVersions, lowerCaseValue, word);
            });
        });
    const words = [...wordPositions.entries()]
        .filter(entry => wordVersions.get(entry[0].toLowerCase()).length === names.length)
        .map(entry => [entry[0], median(entry[1])])
        .sort((a, b) => a[1] - b[1])
        .map(entry => mostFrequent(wordVersions.get(entry[0])));

    return words.join(' ');
}
