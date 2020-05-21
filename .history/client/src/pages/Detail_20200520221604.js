import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import bookData from "./Search";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [book, setBook] = useState(props);

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()

  useEffect(() => {
    if (!searchTerm) {
      return;
    } else {
      setSearch(searchTerm);
    }

    API.searchBooks(props.title)
      .then(res => setBook(res.data.items))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <a
                href={book.link}
              >
                <h1>{book.title}</h1>
              </a>
              <h2>{book.subtitle} ({book.rating})</h2>
              <h3>by</h3>
              <h3>{book.authors.join(", ")}</h3>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <p>{book.categories.join(", ")}</p>
              <img 
                src={book.thumbnail}
                alt="book thumbnail"
                size="300"
                style={{ float: "left" }}
              />
              <p>
                {book.description}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
