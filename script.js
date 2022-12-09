const form = document.forms['books'];
const container = document.querySelector('main');

form.addEventListener('submit', function(e){
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let genre = document.getElementById('genre').value;

    function Book(title, author, genre){
        this.title = title;
        this.author = author;
        this.genre = genre;
    };

    Book.prototype.addBook = function(){
        let cont = document.createElement('div');
        let sTit = document.createElement('span');
        let sAuth = document.createElement('span');
        let sGen = document.createElement('span');
        let btn = document.createElement('button');

        btn.classList.add('del');
        cont.classList.add('cont');

        btn.textContent = 'Delete';
        sTit.textContent = book.title;
        sAuth.textContent = book.author;
        sGen.textContent = book.genre;

        cont.appendChild(sTit);
        cont.appendChild(sAuth);
        cont.appendChild(sGen);
        cont.appendChild(btn);
        container.appendChild(cont);
    
        btn.addEventListener('click', function(e){
            e.target.parentNode.remove()
        })
    };

    let book = new Book(title, author, genre);
    book.addBook();
    form.reset();
    console.log(book);

    
});
