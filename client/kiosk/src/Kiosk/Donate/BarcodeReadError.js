import React, { useState } from "react";
import styles from "./BarcodeReadError.module.css"
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BiHomeAlt } from 'react-icons/bi';
import axios from "axios";

function BarcodeReadError(props) {
    const navigate = useNavigate()
    const location = useLocation()

    const isnavigate = location.state.isnavigate
    const Locker = location.state.Locker
    const User = location.state.User
    const data = {isnavigate: isnavigate, Locker :Locker, User: User}
    
    const onClickHandlerHome = () => {
        navigate('/')
    }
    //홈
    const onClickHandlerBarcodeReadError =() => {
        navigate('/BarcodeReadError', {state: data})
    }
    //다시 찍어달라하기
    const goBack = () => {
        navigate(-1)
    }
    //뒤로가기
    const [inputs, setInputs] = useState({
        barcode : ""
    })

    function barcodeInput(e) {
        let event=window.event || e;

        if(event.target.value.length === 13){
            axios.get(`http://i8b201.p.ssafy.io:8081/backend/book/find/${e.target.value}`, {
            })
            .then((response) => {
                const data = {isnavigate: isnavigate, Locker :Locker, User: User, Book: response.data}
                const onClickHandlerConfirm = () => {
                    navigate('/DonateConfirm', {state : data} )
                }
                onClickHandlerConfirm()
            })
            .catch(function (error) {
                console.log(error)
            })
        } 
        else if (event.target.value.length > 13) {
            onClickHandlerBarcodeReadError()
        }
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    // 회원정보를 가지고 있어야 된다.
    return (
        // <div>
            <div>
                <div className={styles.myImg}>
                    <button className={styles.circle} onClick={goBack}>
                        <AiOutlineArrowLeft className={styles.iconStyle}/>
                    </button>
                    <div >
                        <div className={styles.buttonOne}>
                            <p className={styles.textAlign}>
                            위에 있는 바코드 리더기에
                            <br />
                            다시 도서 바코드를 찍어주세요</p>
                        </div>
                    </div>
                    <input className={styles.barcode} type="text" name="inputs" onChange={barcodeInput} autoFocus />
                    <button className={styles.homeCircle} onClick={onClickHandlerHome}>
                        <BiHomeAlt className={styles.iconStyle}/>
                    </button>
                </div>
            </div>
        )
}

export default BarcodeReadError