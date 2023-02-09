// Selectors
const button = document.querySelector(".generate");
const jokeText = document.querySelector(".jokeText");
const url =
  "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist,explicit&type=single";
// Functions
/// --  Old Way To Fetch Data  --  ///
// const getJoke = () => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       jokeText.textContent = data.joke;
//     });
// };
/// -- New Way to Fetch Data   --   ///
const getJoke = async function () {
  const res = await fetch(url);
  const data = await res.json();
  return (jokeText.textContent = data.joke);
};

getJoke();
// Event Listeners
button.addEventListener("click", getJoke);
