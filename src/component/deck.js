function shuffle(array) {
	const arrayClone = array.slice(0)
	for (let i = 0; i< arrayClone.length - 1; i++) {
		let randomIndex = Math.floor(Math.random() * (i+1))
		let temp = arrayClone[i]
		arrayClone[i] = arrayClone[randomIndex]
		arrayClone[randomIndex] = temp
	}
	return arrayClone
}

export default function initializeDeck(){
	let id = 0
	const cards = ['blue','red','green','purple','silver','yellow','black','goldenRod','maroon','brown'].reduce((acc,type) =>{
		acc.push({
			id:id++,
			type
		})
		acc.push({
			id:id++,
			type
		})
		return acc
	},[])

	return shuffle(cards)
}