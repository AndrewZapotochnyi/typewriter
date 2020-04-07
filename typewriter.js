const sentence = "hello there from lighthouse labs";

const typewriter = function(string) {
  let delay = 0;

  for (const char in string) {
    delay += 50;
    setTimeout(() => {
      process.stdout.write(string[char]); 
    }, delay) // <= 1s delay to make it noticeable. Can dial it down later.
  };
  setTimeout(() => {
    console.log("");
  }, delay)
}

typewriter(sentence);



