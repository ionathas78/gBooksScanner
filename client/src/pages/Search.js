import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Media, MediaItem } from "../components/Media";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import API from "../utils/API";
import Alert from "../Alert";

const KEY_ENTER = 13;

function Search(props) {
  const [books, setBooks] = useState([]);
  const [myBooks, setMyBooks] = useState([]);
  const [search, setSearch] = useState("");
  const { searchTerm } = useParams();

  useEffect(() => {
    API.getBooks()
      .then(res => {
        // console.log(res);
        setMyBooks(res.data);
      })
      .catch(err => console.log(err));

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
      description,
      imageLinks,
      infoLink
      // maturityRating,
      // pageCount,
      // previewLink,
      // subtitle,
      // categories
    } = apiEntry.volumeInfo;
    const id = apiEntry.id;
    
    // console.log(id, authors, title, subtitle, categories,
    //   description, imageLinks, infoLink, maturityRating,
    //   pageCount, previewLink);

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

    let bookToSave = bookData(books[event.target.id]);
    // console.log(bookToSave);
    API.saveBook(bookToSave);
    API.getBooks()
      .then(res => {
        // console.log(res);
        setMyBooks(res.data);

        return (
          <Alert
            type="active"
            message={"Added " + bookToSave.title}
          />    
        )
      })
      .catch(err => console.log(err));
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
    // console.log(link, title);
    if (link) {
      return (
        <img
          alt={title + " book cover"}
          src={link}
          height="300"
          style={{ float: "left", margin: "10px 20px" }}
        />
      )
    } else {
      return;
    }
  }

  // console.log(books);
  let i = -1;
  let j = -1;
  return (
      <Container fluid>
        <Row>
          <Col size="md-9 sm-12">
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
          <Col size="md-9 sm-12">
            <Jumbotron>
              <h1>
                Search Results: {search ? '\'' + search.trim() + '\'' : "..."}
              </h1>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col size="md-9 sm-12">
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
                      link={item.link}
                    />
                  )
                })
              }
            >
            </Media>
          </Col>
        </Row>

        {
          ((!books || !books.length) ?
            <h1>No results</h1>
            :
            books.map(entry => {
              let book = bookData(entry);
              i++;
              // console.log(book);
              return (
                <Row key={i}>
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

        {/* <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row> */}
      </Container>
    );
  }


export default Search;
