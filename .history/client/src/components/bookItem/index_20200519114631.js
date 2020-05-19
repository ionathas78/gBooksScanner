import React from "react";

  function bookItem(book) {
    const [ bookItem, setBookItem ] = useState({});

    useEffect(() => {
        API.getBook(book.id)
            .then(result => {
                if (result.data) {
                    return;
                } else {
                    setBookItem(book);
                    return bookItem;
                }
            })
    })

    API.getBook(book.id)
      .then(result => {
        console.log(result.data)
        if (result.data) {
          return ({/* {book.id} in library */});
        }

        console.log(book);
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
      });
  }

  export default bookItem;
