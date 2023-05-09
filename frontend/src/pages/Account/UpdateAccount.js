import UpdateAccountForm from "../../components/form/UpdateAccountForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetUserId } from "../../api/UserAPICalls";

function UpdateAccount() {

    const userId = localStorage.getItem('jwtAuthToken');

    const result = useSelector(state => state.userReducer);
    const user = result.getLoginUser;

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
            <h1 className='titleH'>사원 계정 수정</h1>
            
            <UpdateAccountForm data={ user }/>
        </>
    );
}

export default UpdateAccount;