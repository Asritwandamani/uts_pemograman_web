const movies = document.querySelectorAll('.movie');

movies.forEach(movie => {
  movie.addEventListener('click', () => {
    movie.classList.toggle('clicked');
  });
});