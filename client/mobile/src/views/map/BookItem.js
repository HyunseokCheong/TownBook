import classes from "./MeetupItem.module.css";
import { Card, CardBody, CardImg, CardText } from "reactstrap";
import NoticeDetail from "views/notice/NoticeDetail";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { faBold } from "@fortawesome/free-solid-svg-icons";

function BookItem(props) {
  // console.log(props.id)
  // console.log(props.noticeTitle)

  // console.log(props.noticeContent)
  // console.log("item전달받은값",props)
  return (
    <div className={classes.item}>
      {/* // 컴포넌트로 감싸서 jsx 콘텐츠를 감싼다(children 개념) */}
      {/* <Card> */}
      {/* <div className={classes.image}>
          <img src={props.image} alt={props.contentTitle} />
        </div> */}
      <Link
        to={{
          pathname: `/notice/${props.id}`,
          state: {
            id: props.id,
            noticeTitle: props.bookTitle,
            noticeContent: props.bookLogDonateDateTime,
          },
        }}
      >
        {/* <p style={{ color: "black", marginBottom: "0" }}>{props.id}</p> */}
        <Card style={{ width: "100%" }}>
          <CardBody style={{ display: "flex", padding: "10px" }}>
            <CardImg
              top
              style={{ width: "25%", paddingRight: "10px" }}
              src={props.bookTitleURL}
              alt="..."
            />
            <CardText>
              <p
                style={{
                  display: "contents",
                  width: "100%",
                  color: "black",
                  marginBottom: "0",
                  padding: "3%",
                  fontSize: "small",
                  fontWeight: "900",
                }}
              >
                {props.bookTitle}
              </p>
            </CardText>
          </CardBody>
        </Card>

        {/* <img
          alt="..."
          // className="avatar"
          src={props.bookTitleURL}
          className={"image"}
        />
        <p style={{ color: "white" }}>{props.bookTitle}</p> */}

        {/* <address>{props.noticeContent}</address> */}
      </Link>
      {/* <div className={classes.actions}>
          <button>To Favorites</button>
        </div> */}
      {/* <div>
            {props.noticeTitle}
            {props.noticeContent}
        </div> */}
      {/* </Card> */}
    </div>
  );
}

export default BookItem;
