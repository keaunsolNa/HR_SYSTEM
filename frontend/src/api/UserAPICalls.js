import { request } from "./Api"; 
import { login } from "../modules/userModules/UserLoginModule";
import { createUser } from "../modules/accountModules/AccountModule";

/* 로그인 함수  */
export function callLoginAPI(loginInfo) {
    
    /* redux-thunk(미들 웨어)를 이용한 비동기 처리 */
    return async (dispatch, getState) => {
        
        /* Api의 axios 처리 참조  */
        const userList = await request('GET', `/api/userlogin/userCheck/${loginInfo.id}`);

        if(userList.password === loginInfo.password) {
            dispatch(login(true));
        } else {
            dispatch(login(false));
        }

        // const result = await userList.find(user => user.id === loginInfo.id && user.password === loginInfo.password); 
    }
}

// 임시 회원 계정 생성 함수
export function createTempuserAPI(tempUser) {
    
    return async (dispatch, getState) => {

        const result = await request('POST', '/api/user/createTempUser', tempUser);

        console.log('before dispatch')
        dispatch(createUser(result))

        console.log('after dispatch')
    }
}
