import { request } from "./Api"; 
import { searchUser, createUser, getUser, updateUser } from "../modules/accountModules/AccountModule";


// 임시 회원 계정 생성 함수
export function createTempuserAPI(tempUser) {
    
    return async (dispatch, getState) => {

        const result = await request('POST', '/api/account/createTempUser', tempUser);
        dispatch(createUser(result))
    }
}

// 임시 계정 조회
export function searchTempUser(empName){

    return async (dispatch, getState) => {

        const result = await request('POST', '/api/account/searchUser', empName);

        dispatch(searchUser(result))
    }
}

// 사원 정보 수정 유저 정보 가져오기
export function callGetUser(id) {

    return async (dispatch, getState) => {

        const user = await request('POST', '/api/account/getUser', id);
        
        dispatch(getUser(user));

        return user;
    }
}

// 사원 정보 수정
export function callUpdateUser(employee) {

    return async (dispatch, getState) => {

        const user = await request('POST', '/api/account/updateUser', employee);

        dispatch(updateUser(user));
    }
}