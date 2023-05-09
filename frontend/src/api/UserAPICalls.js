import { request } from "./Api"; 
import { login, getLoginUser } from "../modules/userModules/UserLoginModule";

/* 로그인 함수  */
export function callLoginAPI(loginInfo) {
    
    /* redux-thunk(미들 웨어)를 이용한 비동기 처리 */
    return async (dispatch, getState) => {
        
        console.log(loginInfo)

        /* Api의 axios 처리 참조  */
        const userList = await request('POST', `/api/userlogin/userCheck`, loginInfo);

        if(userList !== '' && userList !== undefined) {

            dispatch(login(true));
            localStorage.jwtAuthToken = userList;
        } else {
            dispatch(login(false));
        }

    }
}

// Token에서 UserId 가져오기
export function callGetUserId(token) {

    return async (dispatch, getState) => {

        const userId = await request('POST', '/api/userlogin/getLoginUser', token);

        if(userId.hasOwnProperty('ERROR')) {
            alert(userId.ERROR);
            localStorage.clear();
            window.location.replace("/");

        }
        
        dispatch(getLoginUser(userId))
    }
}


