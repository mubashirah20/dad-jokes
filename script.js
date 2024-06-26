const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)
generateJoke()

//whenever use await function have to use async
///USING ASYN/AWAIT
async function generateJoke() {
    const config = {
        headers: {
            'Accept' : 'application/json'
        }
    }

    const response = await fetch('https://icanhazdadjoke.com/', config)

    const data = await response.json() ;
    jokeEl.innerHTML = data.joke
    }


//USING .then
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept' : 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//     .then(response => response.json())
//     .then(data => {
//         jokeEl.innerHTML = data.joke
//     })

// }