function activeTodosCounter(todos) {
    let pluralizedCountStr
    let count = 0
    if (todos !== null) {
        for (let item of todos) {
            if (!item.complete) {
                count += 1
            }
        }
    }
    if (count % 10 === 1 && count % 100 !== 11) {
        pluralizedCountStr = `${count} задание осталось`
    }
    else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 12 || count % 100 > 14)) {
        pluralizedCountStr = `${count} задания осталось`
    }
    else {
        pluralizedCountStr = `${count} заданий осталось`
    }
    return pluralizedCountStr
}

export default activeTodosCounter