import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = {};

/* 액션 타입 설정 */
const GET_APPROVAL = 'approval/Get_APPROVAL';

/* 메뉴 관련 액션 함수 */
export const { approval : { getApproval }} = createActions({
    [GET_APPROVAL]: (res) => ({ approvalList : res })
});

/* 리듀서 함수 */
const menuReducer = handleActions(
    {   
        [GET_APPROVAL]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default menuReducer;

