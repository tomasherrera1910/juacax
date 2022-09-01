const positionUsed = (cols) => {
    let object = {}
    for (let i = 0; i < cols; i++) {
        object[i] = 0
    }
    return object
}

const randomNum = (max, min) => Math.floor(Math.random() * (max - min) + min)

function getRandomPositions(cols, fill, rows) {
    const MAX_VALUES = (rows - 1)
    const MIN_VALUES = 1

    let positions = []
    let positionsUsed = positionUsed(cols)

    const getPosition = (pos) => {
        const randomPosition = randomNum(cols, 0)
        if (pos.indexOf(randomPosition) !== -1 || positionsUsed[randomPosition] === MAX_VALUES) return getPosition(pos)
        else {
            ++positionsUsed[randomPosition]
            return randomPosition
        }
    }
    
    for (let i = 0; i < rows; i++) {
        positions.push([])
        for (let j = 0; j < fill; j++) {
            positions[i].push(getPosition(positions[i]))
        }
    }
    for (let i = 0; i < cols; i++) {
        if (positionsUsed[i] > MAX_VALUES || positionsUsed[i] < MIN_VALUES) {
            return getRandomPositions(cols, fill, rows)
        }
    }
    return positions
}

function getRandomsArrayValues(col, rows) {
    let values = []
    const getValue = (values, col) => {
        let value = 0
        if (col === 0) value = randomNum(9, 1)
        else {
            const min = 10 * col
            const max = min + 9
            value = randomNum(max, min)
        }
        if (values.includes(value)) return getValue(values, col)

        return value
    }

    for (let i = 0; i < rows; i++) {
        values.push(getValue(values, col))
    }

    return values.sort((a, b) => a - b)
}

export default function getCard(colsToFill, rows, cols) {
    let carton = []
    let randomPositions = getRandomPositions(cols, colsToFill, rows)
    let values = []
    for (let i = 0; i < rows; i++)
        carton.push([])

    for (let i = 0; i < cols; i++)
        values.push(getRandomsArrayValues(i, rows))

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (j === 0) carton[i][j] = ' '
            else carton[i][j] = '  '
        }
    }

    for (let i = 0; i < rows; i++) {
        randomPositions[i].forEach((col) => {
            carton[i][col] = values[col][i]
        })
    }
    return carton
}
