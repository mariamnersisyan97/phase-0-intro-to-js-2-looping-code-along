// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

function writeCards(names, surprise) {
    const newArray = []
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`)
        // debugger;
    }
    return newArray;
}


function countDown(number) {
    let n = number
    while (n >= 0)
    console.log(n--);

}
countDown(10);

