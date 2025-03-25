const bookList = document.getElementById("bookList");
const addBtn = document.getElementById("addBook");
const title = document.getElementById("bookTitle");
const author = document.getElementById("authorName");
const date = document.getElementById("publishDate");
const rating = document.getElementById("bookRating");
const genres = document.getElementById("bookGenres");


let library = [];

addBtn.addEventListener("click", () => { 
  const book = {
    title: title.value,
    author: author.value,
    date: date.value,
    rating: rating.value,
    genres: genres.value
  };
  library.push(book);
  addBookToLibrary(book);
  clearInputs();
});

const addBookToLibrary = (book) => {
  const li = document.createElement("li");
  li.classList.add("book");
  li.innerHTML = `
    <h3></h3>${book.title}</h3>
    <p>${book.author}</p>
    <p>${book.rating}</p>
    <p>${book.genres}</p>
    <button class="remove">Remove</button>
  `;


  const removeBtn = li.querySelector(".remove");
  removeBtn.addEventListener("click", () => {
    library = library.filter((b) => b.title !== book.title);
    li.remove();
  });

  bookList.appendChild(li);

  li.addEventListener("click", () => {
    const toast = iziToast.show({
      title: "Book Details",
      message: `
        <h3>Title: ${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Rating: ${book.rating}</p>
        <p>Genres: ${book.genres}</p>
      `,
      theme: "dark",
      position: "topRight",
      layout: 2
    });

    setTimeout(() => {
      toast.destroy();
    }, 5000);
  })
};

const clearInputs = () => {
  title.value = "";
  author.value = "";
  rating.value = "";
  genres.value = "";
};

