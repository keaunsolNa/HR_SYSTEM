import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { callLoginAPI } from '../../api/UserAPICalls';
import { resetLoginUser } from "../../modules/userModules/UserLoginModule";


function LoginForm() {
    
    const dispatch = useDispatch();
    const result = useSelector(state => state.userReducer);
    const loginStatus = !!localStorage.getItem('isLogin');

    /* input 태그 입력 값 state 관리 */
    const [loginInfo, setLoginInfo] = useState(
        {
            empId : '',
            password : ''
        }
    );

    /* 입력 값 변경 시 이벤트 핸들러 */
    const onChangeHandler = (e) => {
        setLoginInfo(
            {
                ...loginInfo,
                [e.target.name] : e.target.value
            }
        );
    }

    /* 로그인 버튼 클릭 시 동작 */
    const onClickHandler = () => {

        /* loginInfo에 대한 유효성 검사 후 호출 */
        dispatch(callLoginAPI(loginInfo));

    }

    /* 로그인 후 성공 실패 동작 */
    useEffect(
        () => {
            
            if(result?.message) {
                alert('아이디와 비밀번호를 확인해주세요');
                setLoginInfo(
                    {
                        empId : '',
                        password : ''
                    }
                );
                dispatch(resetLoginUser());    
            } else if(loginStatus){
                alert('로그인');
                window.location.replace("/");
            } 
        }, // eslint-disable-next-line
        [result]
    );

    
    return (
            <>
                <div>
                    <label>ID : </label>
                    <input type="text" name="empId" value={ loginInfo.empId } onChange={ onChangeHandler }/> &nbsp;&nbsp;&nbsp;
                    <label>PASSWORD : </label>
                    <input type="password" name="password" value={ loginInfo.password } onChange={ onChangeHandler }/>
                    <button onClick={ onClickHandler }>로그인</button>
                </div>
            </>
    );
}

export default LoginForm;