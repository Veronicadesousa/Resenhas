function filterBooks(category) {
  var books = document.getElementsByClassName('livro');
  var livrosContainer = document.getElementById('livros');

  // Reset the container height for proper alignment after filtering
  livrosContainer.style.height = 'auto';

  for (var i = 0; i < books.length; i++) {
    if (category === 'all') {
      books[i].style.display = 'block';
    } else {
      if (books[i].getAttribute('data-category') === category) {
        books[i].style.display = 'block';
      } else {
        books[i].style.display = 'none';
      }
    }
  }

  // Adjust the margin-top of all children after filtering
  var visibleBooks = livrosContainer.querySelectorAll('.livro[style*="block"]');
  visibleBooks.forEach(function(book, index) {
    book.style.marginTop = (index >= 7) ? '55px' : '9px';
  });
}
