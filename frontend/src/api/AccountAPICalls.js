import { request } from "./Api"; 
import { searchUser, createUser } from "../modules/accountModules/AccountModule";


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
