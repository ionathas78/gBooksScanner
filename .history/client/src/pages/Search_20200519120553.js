import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import BookItem from "../components/BookItem";
import API from "../utils/API";

function Search(props) {
  const [books, setBooks] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    API.searchBooks(searchTerm)
      .then(res => setBooks(res.data.items))
      .catch(err => console.log(err));
  }, [])



  console.log(books);
  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Search Results: '{searchTerm}'
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        {
          books.map(entry => {
            return (
              <BookItem />(entry)
            )
          })
        }
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Search;