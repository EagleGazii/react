function choice(array) {
    let randomNum = Math.floor(Math.random() * array.length);
    return array[randomNum];
}

export { choice }