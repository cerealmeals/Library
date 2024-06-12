const myLibrary = []

function Book(author, title, numberOfPages, read){
    this.author = author;
    this.title =title;
    this.numberOfPages = numberOfPages;
    this.read = read;
}

const books = document.querySelector(".books");

function addBookToLibrary(book, i){
    let idiv = document.createElement("div");
    idiv.classList.add("book");
    let iauthor = document.createElement("div");
    iauthor.textContent = book.author;
    idiv.appendChild(iauthor);
    let ititle = document.createElement("div");
    ititle.textContent = book.title;
    idiv.appendChild(ititle);
    let inumberOfPages = document.createElement("div");
    inumberOfPages.textContent = book.numberOfPages;
    idiv.appendChild(inumberOfPages);
    let iread = document.createElement("div");
    iread.textContent = book.read;
    idiv.appendChild(iread);
    let idelete = document.createElement("button");
    idelete.textContent = "Delete";
    idelete.addEventListener("click", ()=>{
        removeBook(i, idiv);
    });
    idiv.appendChild(idelete);
    let itoggle = document.createElement("button");
    itoggle.textContent = "read";
    itoggle.addEventListener("click", ()=>{
        toggleRead(book, iread);
    });
    idiv.appendChild(itoggle);
    books.appendChild(idiv);
}

myLibrary.push(new Book("joe", "Nice Title", "10", "yes"));
myLibrary.push(new Book("jimmy", "bad Title", "11", "no"));


for(let i = 0; i < myLibrary.length; i++){
    addBookToLibrary(myLibrary[i], i);
}


function removeBook(i, parentdiv){
    myLibrary.splice(i, 1)
    parentdiv.remove();
}

function toggleRead(book, read){

    if(read.textContent == "yes"){
        read.textContent = "no";
        book.read = "no";
    }
    else{
        read.textContent = "yes";
        book.read = "yes";
    }
}

const form = document.querySelector(".form");

form.addEventListener("submit", processForm);


function processForm(e){
    if(e.preventDefault){
        e.preventDefault();
    }
    
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    let read = "no";
    if(document.getElementById("yes").checked){
        read = "yes";
    }
    book = new Book(author, title, pages, read);
    myLibrary.push(book);
    addBookToLibrary(book, (myLibrary.length-1));

    return false;
}