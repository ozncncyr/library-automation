//izitoast
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const bookList = document.getElementById("bookList");
const addBtn = document.getElementById("addBook");
const title = document.getElementById("bookTitle");
const author = document.getElementById("authorName");
const date = document.getElementById("publishDate");
const rating = document.getElementById("bookRating");
const genres = document.getElementById("bookGenres");


let library = [];

addBtn.addEventListener("click", () => {
  if (!title.value || !author.value || !date.value || !rating.value || !genres.value) {
    iziToast.show({
      title: "Error",
      message: "Please fill in all fields",
      position: "topRight",
      color: "red",
      timeout: 3000
    })
    return;
  } else {
    rating.value = rating.value > 10 ? 10 : rating.rating;
    rating.value = rating.value < 1 ? 1 : rating.rating;
    const book = {
      id: Date.now(),
      title: title.value,
      author: author.value,
      date: date.value,
      rating: rating.value,
      genres: genres.value,
  };
    
  library.push(book);
  addBookToLibrary(book);
  clearInputs();
  saveLibrary();
  iziToast.show({
    title: "Success",
    message: "Book added to library",
    position: "topRight",
    color: "green",
    timeout: 3000
  })
    }
});

const addBookToLibrary = (book) => {
  const li = document.createElement("li");
  li.classList.add("book");
  li.innerHTML = `
    <h3>📖 ${book.title}</h3>
    <div class="book-info">
    <p>🖋️ ${book.author}</p>
    <p>📆 ${book.date}</p>
    <p>⭐ ${book.rating}</p>
    <p>🎭 ${book.genres}</p>
    </div>
    <button class="remove">🗑️ Remove</button>
  `;


  const removeBtn = li.querySelector(".remove");
  removeBtn.addEventListener("click", () => {
    library = library.filter((b) => b.id !== book.id);
    li.remove();
    iziToast.show({
    title: "Success",
    message: "Book deleted from library",
    position: "topRight",
    color: "yellow",
    timeout: 3000
  })
  });

  bookList.appendChild(li);
};

const clearInputs = () => {
  title.value = "";
  author.value = "";
  date.value = "";
  rating.value = "";
  genres.value = "";
};

const saveLibrary = () => {
  localStorage.setItem("library", JSON.stringify(library));
};

const loadLibrary = () => {
  const savedLibrary = localStorage.getItem("library");
  if (savedLibrary) {
    library = JSON.parse(savedLibrary);
    library.forEach((book) => {
      addBookToLibrary(book);
    });
  }
};

loadLibrary();

window.addEventListener("beforeunload", saveLibrary);
