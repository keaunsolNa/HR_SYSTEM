import { request } from "./Api"; 
import { login, getLoginUser } from "../modules/userModules/UserLoginModule";

import jwt_decode from 'jwt-decode';

/* 로그인 함수  */
export function callLoginAPI(loginInfo) {
    
    /* redux-thunk(미들 웨어)를 이용한 비동기 처리 */
    return async (dispatch, getState) => {
        
        /* Api의 axios 처리 참조  */

        console.log(loginInfo)
        const token = await request('POST', `/api/userlogin/userCheck`, loginInfo);


        if(token) {

            if(token === "임시 계정") {
                alert('현재 임시 계정인 상태입니다. 사원 정보를 먼저 갱신 해 주세요.')
            }

            dispatch(login(true));
            localStorage.jwtAuthToken = token;

            const decodedToken = jwt_decode(token);
            const userRole = decodedToken.roles;

            let array = [];
            
            userRole.map(function(role){
                array.push(role.authorityName)
            })
            
            localStorage.setItem("Role", JSON.stringify(array));

        } else {

            dispatch(login(false));

        }

    }
}

// Token에서 UserId 가져오기
export function callGetUserId(token) {

    return async (dispatch, getState) => {

        if(token === null || token === undefined) {
            alert('인증 토큰이 없습니다. 다시 로그인 해 주세요.');
            localStorage.clear();
            window.location.replace("/");
        }

        const userId = await request('POST', '/api/userlogin/getLoginUser', token);

        if(userId.hasOwnProperty('ERROR')) {
            alert(userId.ERROR);
            localStorage.clear();
            window.location.replace("/");

        }
        
        dispatch(getLoginUser(userId))
    }
}


