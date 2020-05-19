import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
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

    console.log(authors, title, subtitle, categories,
      description, imageLinks, infoLink, maturityRating,
      pageCount, previewLink);

    return {
      title: title,
      authors: authors,
      description: description,
      // image: (imageLinks ? imageLinks.thumbnail : ""),
      image: (imageLinks ? imageLinks.smallThumbnail : ""),
      link: infoLink
    }

  }

  function bookImage(title, link) {
    if (link) {
      return (
        <img
          alt={title} book cover
          src={link}
          height="300"
          style={{ float: "left", margin: "10px 20px" }}
        />
      )
    } else {
      return;
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
            let book = bookData(entry);
            return (
              <Row>
                <Col size="md-10 md-offset-1">
                  <article>
                    {
                      bookImage(book.title, book.image)
                    }
                    <h2>
                      <a href={book.link} >
                        {book.title}
                      </a>
                    </h2>
                    <h3>by {book.authors.join(", ")}</h3>
                    <p>
                      {book.description}
                    </p>
                    <button 
                      className="success"
                      style={{ float: right, margin: 5px;}}
                    >
                      +
                    </button>
                  </article>
                </Col>
              </Row>  
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