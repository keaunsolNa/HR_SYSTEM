import { request } from "./Api"; 
import { getApproval } from "../modules/approvalModules/ApprovalModule";

// 메뉴 리스트 호출
export function callGetApproval() {
    
    /* redux-thunk(미들 웨어)를 이용한 비동기 처리 */
    return async (dispatch, getState) => {
        /* Api의 axios 처리 참조  */
        const result = await request('GET', `/api/menulist`);
        /* action 생성 함수에 결과 전달하며 dispatch 호출 */
        dispatch(getApproval(result));
    }
}
