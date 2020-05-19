import { React, useEffect, useState } from "./node_modules/react";
import { Col, Row } from "../Grid";
import API from "../../utils/API";

  function BookItem(book) {
    const [ bookItem, setBookItem ] = useState({});

    useEffect(() => {
        API.getBook(book.id)
            .then(result => {
                if (result.data) {
                    return;
                } else {
                    return setBookItem(book);
                }
            })
    })

    function handleClick(event) {
      event.preventDefault();
      console.log(event.target);
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
  
    if (!bookItem) {
        return {/* {book.title} ({book.id}) in library */};
    } else {
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
                  id={book.id}
                  style={{ float: "right", margin: "5px"}}
                >
                  +
                </button>
                <h3>by {book.authors.join(", ")}</h3>
                <p>
                  {book.description}
                </p>
              </article>
            </Col>
          </Row> 
        )
      }
  }

  export default BookItem;
