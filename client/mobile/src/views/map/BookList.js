// import classes from "./MeetupList.module.css";
import React from "react";
import BookItem from "views/map/BookItem";
// import MyPageReceiveItem from "views/account/MyPageReceiveItem";
import {
  Alert,
  UncontrolledAlert,
  CardBody,
  Row,
  CardHeader,
  CardTitle,
  Card,
} from "reactstrap";

function BookList(props) {
  console.log("list전달받은값", props);
  return (
    <div>
      {props.bookList.map((book) => (
        <div>
          <Alert
            // color="info"
            style={{
              background: "#c1b5a9",
              padding: "0rem 0.5rem 0rem 0.5rem",
            }}
          >
            <BookItem
              key={book.id}
              id={book.id}
              bookTitle={book.book.bookTitle}
              bookTitleURL={book.book.bookTitleURL}
            />
          </Alert>
        </div>
      ))}
    </div>
  );
}
export default BookList;
