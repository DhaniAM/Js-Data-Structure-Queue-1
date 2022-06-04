const addButton = document.querySelector("#adding");
addButton.addEventListener("click", () => {
	addQueue(10);
	console.log(queue);
	// console.log("head = " + head);
	// console.log("tail = " + tail);
})
const deleteButton = document.querySelector("#deleting");
deleteButton.addEventListener("click", () => {
	deleteQueue();
	console.log(queue);
	// console.log("head = " + head);
	// console.log("tail = " + tail);
})

let arrLength = 4;
let queue = new Array(arrLength);
let head = -1;
let tail = -1;

const addQueue = (item) => {
	// add if not full
	if (!isFull()) {
		if (head === -1) {
			head += 1;
		}
		tail = (tail + 1) % arrLength;
		queue[tail] = item;
	// if full, don't add
	} else {
		console.log("It's full");
	}
}

const deleteQueue = () => {
	// if it's the last item, reset
	if (!isEmpty()) {
		queue[head] = null;
		if (head === tail) {
			head = -1;
			tail = -1;
		} else {
			head = (head + 1) % arrLength;
	 	} 
	} else {
		console.log("It's Empty")
	}
}

const isFull = () => {
	if (head === 0 && tail === arrLength - 1) {
		return true;
	} else if (head - tail === 1) {
		return true;
	} else {
		return false; 
	}
}

const isEmpty = () => {
	if (head === -1 && tail === -1) {
		return true;
	} else {
		return false;
	}
}