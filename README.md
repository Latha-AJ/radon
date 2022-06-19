1. Write down the schemas for book and authors (keeping the data given below in mind). Also create the documents (corresponding to the data given below) in your database.
2. CRUD operations. Write API's to do the following:

1. Write create APIs for both books and authors ---> If author_id is not available then do not accept the entry(in neither the author collection nor the books collection)

2. List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )

3. find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)

4. Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)
Optional questions: 

5. Write an api GET /books-by-authorid/<Author_Id> (for example /books/1 or /books/2 etc) that returns all the books written by the author with an id <Author_Id>. Only return the names of these books

6. Find a list of authors whose are older than 50 years of age with at least one book that has a rating greater than 4. Only include the author’s names and their ages in the response for this api
