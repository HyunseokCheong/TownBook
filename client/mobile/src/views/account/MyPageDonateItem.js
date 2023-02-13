import classes from "./MeetupItem.module.css";
import { Card } from "reactstrap";
import NoticeDetail from "views/notice/NoticeDetail";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { faBold } from "@fortawesome/free-solid-svg-icons";

function NoticeItem(props) {
  // console.log(props.id)
  // console.log(props.noticeTitle)

  // console.log(props.noticeContent)

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
        <p style={{ color: "black" }}>{props.id}</p>
        <p style={{ color: "black" }}>{props.bookTitle}</p>
        <p style={{ color: "black" }}>{props.bookLogDonateDateTime}</p>

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

export default NoticeItem;
