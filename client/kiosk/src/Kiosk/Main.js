import React, { useState } from "react"
import styles from "./Main.module.css"
import Modal from "../ui/Modal.js"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Main(props) {
    const navigate = useNavigate()
    const [modalOpen, setModalOpen] = useState(false);

    let isnavigate = true //true 기부 false 수령

    function onClickHandler() {
            axios.get(`http://i8b201.p.ssafy.io:8081/backend/locker/`, {
            })
            .then((response) => {
                if (response.data[0].detailLocker.length === response.data[0].lockerBookCnt) {
                    const showModal = () => {
                        setModalOpen(true);
                    };
                    showModal()
                    // 락커의 책과 길이가 같으면 모달창을 띄워줌           
                } else {
                    const onClickHandlerMemberSelect = () => {
                        navigate('/kiosk/MemberSelect',
                        {state: isnavigate,
                    })}
                    onClickHandlerMemberSelect()
                }
                // 그게 아니면 다음 페이지로 넘어간다
            })
            .catch(function (error) {
                console.log(error)
            })
        }
    const onClickHandlerUse = () => {
        isnavigate = false
        navigate('/kiosk/DonateUse', {state: isnavigate})
    }

    return (
            <div className={styles.myImg}>
                    <div>
                        <button className={styles.buttonLeft} onClick={onClickHandler}>
                            도서 기부
                        </button>
                        {modalOpen && <Modal setModalOpen={setModalOpen} />}
                    </div>
                    <button className={styles.buttonRight} onClick={onClickHandlerUse}>
                        도서 수령
                    </button>
            </div>
        )
}

export default Main