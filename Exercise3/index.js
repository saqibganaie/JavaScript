let jokesArr = [
  `Why don’t they play poker in the jungle? Too many cheetahs`,
  `What did the frustrated cat say? Are you kitten me right meow`,
  `What kind of tea is hard to swallow? Reality`,
  `What did the Buddhist say to the hot dog vendor? Make me one with everything`,
  `How did the hamburger know he needed new pants? His buns were showing`,
  `What do you call two monkeys that share an Amazon account? Prime mates`,
  `What do you call a pile of cats? A meow-tain`,
  `If you’re American when you go into a bathroom and when you come out, what are ou `,
  `while you’re inside? European`,
  `What’s the leading cause of dry skin? Towels`,
  `When does Snoop Dogg use an umbrella? For drizzle`,
  `What kind of cereal do dads like? Corn flakes`,
  `When does a joke become a dad joke? When it becomes apparent`,
  `Why is it hard to explain puns to kleptomaniacs? They always take things iterally`,
  `If you see a robbery at an Apple store, what does it make you? An Iwitness`,
  `Why did the M&M go to school? Because he wanted to be a Smartie`,
  `Why was the candle happy? It was liiit`,
  `Why wouldn’t the sesame seed leave the casino? It was on a roll`,
  `Why shouldn’t you write with a broken pencil? Because it’s pointless`,
  `Why is Peter Pan always flying? He neverlands`,
  `What kind of pants does Mario wear? Denim denim denim`,
  `What did the buffalo say when his son left? Bison`,
  `Why did the chef die? He ran out of thyme`,
  `Where can you find your grandma in a hurry? Insta-gram`,
  `What do dentists call their x-rays? Tooth pics`,
  `Why did the farmer win an award? He was out standing in his field`,
  `Why do melons have weddings? Because they cantaloupe`,
  `My teachers told me my procrastination would keep me from being successful I old `,
  `them, “Just you wait!”`,
  `Why can’t a bike stand on its own? It’s two-tired`,
  `What did the duck say when it bought lip gloss? “Put it on my bill”`,
  `Do you know how I’m sure we’ll be friends forever? Because we’re too lazy to find `,
  `ther friends`,
  `Just remember that if you lose your shoe at the party tonight, it’s not cause t’s `,
  `a fairytale… it’s cause you’re drunk`,
  `How do you find Will Smith in the snow? Look for fresh prints`,
  `Always remember not to take life too seriously You’ll never get out of it alive`,
  `Wanna hear two short jokes and a long joke? Joke, joke, jooooooke`,
  `What do you call a Frenchman in sandals? Phillipe Floppe`,
  `Working in a mirror factory is something I could totally see myself doing`,
  `I have an inferiority complex, but it’s not a very good one`,
  `RIP to boiling water You will be mist`,
];
let jokeCard = document.getElementById("joke-card");
jokeCard.textContent = jokesArr[0];
let randJokeBtn = document.getElementById("random-joke-btn");
randJokeBtn.addEventListener("click", () => {
  jokeCard.textContent = getRandjoke();
});

function getRandjoke() {
  let randNum = Math.floor(Math.random() * jokesArr.length);
  return jokesArr[randNum];
}
