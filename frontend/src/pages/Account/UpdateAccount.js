import TokenCheck from "../../components/form/TokenCheck";
import UpdateAccountForm from "../../components/form/UpdateAccountForm";

function UpdateAccount() {

    const userId = localStorage.getItem('jwtAuthToken');

    return (
        <>
            <h1 className='titleH'>사원 계정 수정</h1>
            <UpdateAccountForm id={ userId }/>
        </>
    );
}

export default UpdateAccount;