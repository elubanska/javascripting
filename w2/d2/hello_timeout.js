const text = "4311o th3r3 w0r1d";


// setTimeout(() => {
//     console.log(text);
// }, 3000)

let splittedText = text.split(' ');

const slowTyper = (array) => {
    let seconds = 0;
    for (let word of array) {
        setTimeout(() => {
            process.stdout.write(word);
        }, seconds)
        seconds += 1000;
    }
}
slowTyper(splittedText);

