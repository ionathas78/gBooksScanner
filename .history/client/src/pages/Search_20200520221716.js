import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import API from "../utils/API";

const KEY_ENTER = 13;

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

  function handleClick(event) {
    event.preventDefault();

    let bookToSave = bookData(books[event.target.id]);
    API.saveBook(bookToSave);
  }

  function handleChange(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }

  function handleKeydown(event) {
    if (event.keyCode === KEY_ENTER) {
      event.preventDefault();
      if (search) {
        API.searchBooks(search)
        .then(res => setBooks(res.data.items))
        .catch(err => console.log(err));
      }
    }
  }

  function handleSearch(event) {
    event.preventDefault();
    if (search) {
      API.searchBooks(search)
      .then(res => setBooks(res.data.items))
      .catch(err => console.log(err));
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

  let i = -1;
  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <SearchBar 
              name="search"
              placeholder="Enter Search Term(s)"
              id="search"
              onChange={handleChange}
              onClick={handleSearch}
              onKeyDown={handleKeydown}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Search Results: {search ? '\'' + search + '\'' : "..."}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        {
          ((!books || !books.length) ?
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
                        bookImage(book.title, book.smallImage)
                      }
                      <h2>
                        <a href={"/api/books/" + book.id} >
                          {book.title}
                        </a>
                      </h2>
                      <button 
                        className="success"
                        onClick={handleClick}
                        id={i}
                        style={{ float: "right", margin: "5px" }}
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

  function bookData(apiEntry) {
    const { 
      authors, 
      title,
      description,
      imageLinks,
      infoLink,
      maturityRating,
      pageCount,
      previewLink,
      subtitle,
      categories
    } = apiEntry.volumeInfo;
    const id = apiEntry.id;
    
    return {
      id: id,
      title: title,
      subtitle: subtitle,
      authors: authors,
      description: description,
      image: (imageLinks ? imageLinks.thumbnail : ""),
      smallImage: (imageLinks ? imageLinks.smallThumbnail : ""),
      link: infoLink,
      rating: maturityRating,
      pageCount: pageCount,
      preview: previewLink,
      categories: categories
    }
  }

export default { Search, bookData };
