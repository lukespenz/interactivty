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
message.textContent = 'MOVIE HAS BEEN TERMINATED';
}

const crossOffMovie = (event) => {
event.target.classList.toggle('checked');
event.target.classList.contains('checked') ? message.textContent = 'Movie watched' : message.textContent = 'Movie added back!'
};

const button = document.querySelector('#button');
button.addEventListener('click', addMovie);
document.querySelector('form').addEventListener('submit', addMovie);
