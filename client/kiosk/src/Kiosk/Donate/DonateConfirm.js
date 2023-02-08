/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./DonateConfirm.module.css"
import { useLocation, useNavigate } from "react-router-dom";
import book from "../img/book.jpg"
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BiHomeAlt } from 'react-icons/bi';
import axios from "axios";

function DonateConfirm(props) {
    // 빈보관함이 무엇인지 확인하고 if로 하기  
    const UrlOneOpen = "http://192.168.140.1/mainServo/0"   //메인 보관함 열기 1번 보관함 열기 2번 보관함 열기
    const UrlTwoOpen = ["http://192.168.140.1/servo1/0", "http://192.168.140.1/servo2/0"]
    const Url = 'http://localhost:3000/'
    const navigate = useNavigate()
    const location = useLocation()

    const isnavigate = location.state.isnavigate
    const Locker = location.state.Locker
    const User = location.state.User
    const Book = location.state.Book
    console.log(isnavigate)
    console.log(Locker)
    console.log(User)
    console.log(Book)

    const data = {isnavigate: isnavigate, Locker :Locker, User: User, Book: Book}

    const title = Book.bookTitle
    // 책 제목
    let bookURL = location.state.bookIntroductionURL
    if (bookURL === "null.png") {
        bookURL = book
        }
    // 이미지가 없을 때 빈이미지 대신 넣는 이미지
    const onClickHandlerHome = () => {
        navigate('/')
    }
    //홈
    const onClickHandlerComplete =() => {
        axios.get(Url, {
        })
        .then((response) => {
            // axios.get(UrlTwoOpen, {

            // })
            navigate('/DonateComplete', {state: data})
        })
        .catch(function (error) {
            console.log(error)
        })
    }
    const onClickHandlerBarcodeReadError =() => {
        const data = {isnavigate: isnavigate, Locker :Locker, User: User}
        navigate('/BarcodeReadError', {state: data})
    }
    // 다시 바코드를 찍게
    const goBack = () => {
        navigate(-1)
    }
    // 뒤로가기

    // 회원정보를 가지고 있어야 된다.
    return (
            <div>
                <div className={styles.myImg}>
                    <button className={styles.circle} onClick={goBack}>
                        <AiOutlineArrowLeft className={styles.iconStyle}/>
                    </button>
                    <div >
                        <div className={styles.buttonOne}>
                            <img src={bookURL} className={styles.book}/>
                            <div className={styles.title}>
                                {title}
                            </div>
                            <p className={styles.textAlignTwo}>기부하시는 책이 맞습니까?</p>
                            <div>
                                <button className={styles.buttonTwo} onClick={onClickHandlerComplete}>
                                    <p className={styles.textAlignOne}>예</p>
                                </button>
                                <button className={styles.buttonThree} onClick={onClickHandlerBarcodeReadError}>
                                    <p className={styles.textAlignOne}>아니오</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <button className={styles.homeCircle} onClick={onClickHandlerHome}>
                        <BiHomeAlt className={styles.iconStyle}/>
                    </button>
                </div>
            </div>
        )
}

export default DonateConfirm