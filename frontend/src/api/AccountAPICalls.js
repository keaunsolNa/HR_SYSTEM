import { request } from "./Api"; 
import { registUser } from "../modules/accountModules/AccountModule";

// 메뉴 리스트 호출
export function callRegistMenuAPI(user) {
    
    return async (dispatch, getState) => {
        
        const result = await request('POST', '/api/account/createUser', user);

        dispatch(registUser(result));
    }
}
