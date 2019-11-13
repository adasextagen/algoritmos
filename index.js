let a = 'anita lava la tina'

const palindromator = (str) => {
	let clear = str.replace(/\s/g, '')
	let aux = clear.split('').reverse().join('')
	return aux === clear ? 'Palindormarrr' : 'nope'
}

//console.log(palindromator(a))

let b = '(()'

const balanced = (str) => {
	let result = str.split('').reduce((acc, nxt) => {
		if (nxt === '(') {
			++acc
		} else if (nxt === ')') {
			--acc
		}
		return acc
	}, 0)
	return !result ? 'Mirá ese balanceo papá' : 'nope'
}

const balancedPiola = (str, list) =>
	!str.split('').reduce((a, b) => (b === '(' ? ++a : b === ')' ? --a : null), 0) ? 'Mirá ese balanceo papá' : 'nope'

//console.log(balancedPiola(b, [ '(', ')' ]))

const found = (list) => {
	let clear = list.filter((e) => e > 0).sort()

	const excludedMinor = (lista, base) => {
		let result
		if (lista[0] === base) {
			let newList = lista.splice(1, list.length)
			excludedMinor(newList, ++base)
		} else {
			result = base
		}
		return result
	}

	return excludedMinor(clear, 1)
}

let c = [ -2, -1, 0, 1, 2, 3 ]

const foundPiola = (list) => {
	const exMinor = (lista, base) => (lista[0] === base ? exMinor(lista.splice(1, lista.length), ++base) : base)
	return exMinor(list.filter((e) => e > 0).sort(), 1)
}

const numberMissing = (list) => list.sort().reduce((acc, next) => (acc > 0 ? (acc === next ? ++acc : acc) : acc), 1)

console.log(foundPiola(c))