import axios from "axios";

export default {
    // Gets book from Google search
    getGoogleBooks: function(q){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + q)
        // return axios.get("/api/google", { params: { q: "title:" + q } });
    },

    // Gets all books
    getBooks: function(){
        return axios.get("/api/books");
    },

    // Gets the book with the given id
    getBook: function(id){
        return axios.get("/api/books/" + id);
    },

    // Saves a book to the database
    saveBook: function(bookData){
        return axios.post("/api/books", bookData);
    },

    // Deletes the book with the given id
    deleteBook: function(id){
        return axios.delete("/api/books/" + id);
    }

};