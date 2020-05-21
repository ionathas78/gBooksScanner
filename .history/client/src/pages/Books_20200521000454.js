import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Media, MediaItem } from "../components/Media";

function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

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
              books.map(item => {
                i++;
                // console.log(j, item.image, item.title);
                return (
                  <MediaItem
                    key={i}
                    imageSrc={item.image}
                    altText={item.title}
                    link={item.link}
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
                    {/* <Link to={"/books/" + book.id}>
                      <strong>
                        {book.title} by {book.authors.join(", ")}
                      </strong>
                    </Link> */}
                    <a href={book.link}>
                      <strong>
                        {book.title} by {book.authors.join(", ")}
                      </strong>
                    </a>
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
