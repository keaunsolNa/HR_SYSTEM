import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { callGetUserId } from '../../api/UserAPICalls';

function PasswordChanger() {
    const dispatch = useDispatch();

    const [jwtAuthToken] = useState(
        {
            jwtAuthToken: localStorage.getItem("jwtAuthToken"),
        }
    );


    useEffect(
        () => {
            dispatch(callGetUserId(jwtAuthToken));
        },
        []
    );

    return (
        <>
            <h3>테스트</h3>
        </>
    );
}

export default PasswordChanger;