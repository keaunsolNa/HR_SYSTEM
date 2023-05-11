import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { callGetUserId } from "../../api/UserAPICalls";

function DeleteAccount() {

    const userId = localStorage.getItem('jwtAuthToken');

    const dispatch = useDispatch();

    useEffect(
        () => {

            dispatch(callGetUserId(userId));
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return (
        <>
            <h3>계정 삭제</h3>
        </>
    );
}

export default DeleteAccount;