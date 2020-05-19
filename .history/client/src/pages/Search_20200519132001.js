import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button";
import Input from "../components/Input";
import API from "../utils/API";

function Search(props) {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const { searchTerm } = useParams();

  useEffect(() => {
    if (!searchTerm) {
      return;
    } else {
      setSearch(searchTerm);
    }

    API.searchBooks(search)
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

  function handleClick(event) {
    event.preventDefault();
    console.log(event.target);

    let bookToSave = bookData(books[event.target.id]);
    API.saveBook(bookToSave);
  }

  function handleChange(event) {
    event.preventDefault();

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
  let i = -1;

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Input 
              name="search"
              placeholder="Enter Search Term(s)"
              id="search"
              width="80%"
              onChange={handleChange}
            />
            <Button 
              type="button"
              className="primary"
              width="15%"
            >
              Search
            </Button>
          </Col>
        </Row>
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
          ((!books || (books.length === 0)) ?
            <h1>No results</h1>
            :
            books.map(entry => {
              let book = bookData(entry);
              i++;
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
                      <button 
                        className="success"
                        onClick={handleClick}
                        id={i}
                        style={{ float: "right", margin: "5px"}}
                      >
                        +
                      </button>
                      <h3>by {(book.authors ? book.authors.join(", ") : "")}</h3>
                      <p>
                        {book.description}
                      </p>
                    </article>
                  </Col>
                </Row> 
            )
          })
          )
        }
        <hr/>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Search;
