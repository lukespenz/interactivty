console.log('hello world');

const message = document.querySelector('#message')

const addMovie = (event) => {
event.preventDefault()

 const inputField = document.querySelector('input');
 const movie = document.createElement('li');
 const movieTitle = document.createElement('span')
 movieTitle.addEventListener('click', crossOffMovie);
 movieTitle.textContent = inputField.value;


 movie.appendChild(movieTitle);

 const deleteBtn = document.createElement('button');
 deleteBtn.textContent = 'X';
 deleteBtn.addEventListener('click', deleteMovie);
movie.appendChild(deleteBtn);

 const list = document.querySelector('ul');
 list.appendChild(movie);
 inputField = document.querySelector('');
};

const deleteMovie = (event) => {
event.target.parentNode.remove();
message.textContent = `${event.target.parentNode.textContent} HAS BEEN TERMINATED`;
revealMessage();
}

const crossOffMovie = (event) => {
event.target.classList.toggle('checked');
event.target.classList.contains('checked') ? message.textContent = `${event.target.textContent} watched` : message.textContent = `${event.target.textContent} added back`
revealMessage();
};

const revealMessage = () => {
    message.classList.remove('hide')
setTimeout(()=>{
    message.classList.add('hide')
}, 1000)
};

const button = document.querySelector('#button');
button.addEventListener('click', addMovie);
document.querySelector('form').addEventListener('submit', addMovie);
