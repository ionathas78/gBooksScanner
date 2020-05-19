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

  function bookData(apiEntry) {
    const { 
      authors, 
      title,
      subtitle,
      categories,  
      description,
      imageLinks,
      infoLink,
      maturityRating,
      pageCount,
      previewLink
    } = apiEntry.volumeInfo;
    const id = apiEntry.id;

    console.log(id, authors, title, subtitle, categories,
      description, imageLinks, infoLink, maturityRating,
      pageCount, previewLink);

    return {
      id: id,
      title: title,
      authors: authors,
      description: description,
      // image: (imageLinks ? imageLinks.thumbnail : ""),
      image: (imageLinks ? imageLinks.smallThumbnail : ""),
      link: infoLink
    }

  }



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
              <BookItem 
                props={entry}
              />
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
