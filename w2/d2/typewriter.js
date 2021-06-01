const sentence = "hello there from lighthouse labs";
// for (const char of sentence) {
//     console.log(char);
//    };

  let splittedText = sentence.split(' ');

  const typeWriter = (array) => {
      let seconds = 0;
      for (let word of array) {
          setTimeout(() => {
              process.stdout.write(word + " ");
                //process.stdout.write('');
          }, seconds)
          seconds += 1000;
      }
  }
  typeWriter(splittedText);