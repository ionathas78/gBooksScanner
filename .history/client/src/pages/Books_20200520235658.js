import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Media, MediaItem } from "../components/Media";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

    let i = -1;
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Saved for Later</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Media
            children={
              myBooks.map(item => {
                j++;
                // console.log(j, item.image, item.title);
                return (
                  <MediaItem
                    key={j}
                    imageSrc={item.image}
                    altText={item.title}
                  />
                )
              })
            }
          >
          </Media>
        </Row>
        <Row>
          <Col size="md-6 sm-12">
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book.id}>
                    <Link to={"/books/" + book.id}>
                      <strong>
                        {book.title} by {book.authors.join(", ")}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book.id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Books;
