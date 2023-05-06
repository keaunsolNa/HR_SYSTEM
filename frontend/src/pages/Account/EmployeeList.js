import User from "../../components/items/user";
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function MenuDetail() {

    /* 로그인 상태 확인 */
    const { id } = useParams();
    const result = useSelector(state => state.accountReducer);

    useEffect(
        () => {
        }, 
        [result]
    );

    return (
        <div>
            <h1>사원 정보</h1>
            <User id={ id }/>
        </div>
    );
}

export default MenuDetail;