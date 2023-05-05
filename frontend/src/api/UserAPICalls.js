import { request } from "./Api"; 
import { login } from "../modules/userModules/UserLoginModule";

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
    
    console.log(tempUser)
    /* redux-thunk(미들 웨어)를 이용한 비동기 처리 */
    return async (dispatch, getState) => {
        
        const user = [ {
            userName : tempUser.userName,
            hireCd : tempUser.hireCd,
            posGrdCd : tempUser.posGrdCd,
            orgCd : tempUser.orgCd,
            posCd : tempUser.posCd,
        }]
        /* Api의 axios 처리 참조  */
        const userList = await request('POST', '/api/user/createTempUser', `${tempUser}`);

        console.log(userList);

        // const result = await userList.find(user => user.id === loginInfo.id && user.password === loginInfo.password); 
    }
}
