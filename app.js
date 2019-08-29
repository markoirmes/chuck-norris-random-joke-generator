let randomNumber;
const jokeText = document.getElementById("jokeText");

function newJoke() {
  randomNumber = Math.floor(Math.random() * 21);

  switch (randomNumber) {
    case 0:
      jokeText.innerHTML = "The chief export of Chuck Norris is Pain.";
      break;
    case 1:
      jokeText.innerHTML =
        "Chuck Norris does not wear a condom. Because there is no such thing as protection from Chuck Norris.";
      break;
    case 2:
      jokeText.innerHTML =
        "Chuck Norris has already been to Mars; that's why there are no signs of life there.";
      break;
    case 3:
      jokeText.innerHTML = "Chuck Norris counted to infinity... Twice.";
      break;
    case 4:
      jokeText.innerHTML =
        "When the Boogeyman goes to sleep at night he checks his closet for Chuck Norris.";
      break;
    case 5:
      jokeText.innerHTML =
        "Chuck Norris uses pepper spray to spice up his steaks.";
      break;
    case 6:
      jokeText.innerHTML =
        "The quickest way to a man's heart is with Chuck Norris' fist.";
      break;
    case 7:
      jokeText.innerHTML =
        "What was going through the minds of all of Chuck Norris' victims before they died? His shoe.";
      break;
    case 8:
      jokeText.innerHTML =
        "Fool me once, shame on you. Fool Chuck Norris once and he will roundhouse you in the face.";
      break;
    case 9:
      jokeText.innerHTML =
        "Chuck Norris is the only man to ever defeat a brick wall in a game of tennis.";
      break;
    case 10:
      jokeText.innerHTML =
        "When Chuck Norris calls 1-900 numbers, he doesn't get charged. He holds up the phone and money falls out.";
      break;
    case 11:
      jokeText.innerHTML =
        "Chuck Norris once ate a whole cake before his friends could tell him there was a stripper in it.";
      break;
    case 12:
      jokeText.innerHTML =
        "Chuck Norris' house has no doors, only walls that he walks through.";
      break;
    case 13:
      jokeText.innerHTML = "Chuck Norris can divide by zero.";
      break;
    case 14:
      jokeText.innerHTML =
        "Chuck Norris grinds his coffee with his teeth and boils the water with his own rage.";
      break;
    case 15:
      jokeText.innerHTML =
        "Chuck Norris once ate an entire bottle of sleeping pills. They made him blink.";
      break;
    case 16:
      jokeText.innerHTML = "Chuck Norris can touch MC Hammer.";
      break;
    case 17:
      jokeText.innerHTML =
        "Chuck Norris played Russian Roulette with a fully loaded gun and won.";
      break;
    case 18:
      jokeText.innerHTML =
        "Some people wear Superman pajamas. Superman wears Chuck Norris pajamas.";
      break;
    case 19:
      jokeText.innerHTML =
        "There is no such thing as global warming. Chuck Norris was cold, so he turned the sun up.";
      break;
    case 20:
      jokeText.innerHTML =
        "The Great Wall of China was originally created to keep Chuck Norris out. It failed miserably.";
      break;
    case 21:
      jokeText.innerHTML =
        "Chuck Norris's show is called Walker: Texas Ranger, because Chuck Norris doesn't run.";
      break;
  }
}
