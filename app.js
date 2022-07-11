const dadJoke = document.getElementById('joke');
const jokebtn = document.getElementById('btnJoke');

jokebtn.addEventListener('click', jokeGenerator);

async function jokeGenerator(){
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }

  const res = await fetch('https://icanhazdadjoke.com', config);

  const data = await res.json();

  dadJoke.innerHTML = data.joke;
}