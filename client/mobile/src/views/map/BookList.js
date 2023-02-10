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
<<<<<<< HEAD
          <Alert color="info">
=======
          <Alert color="info" >
>>>>>>> f3f6dfd1b7c00c297fe982bfb7cbaf459e5141d5
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
