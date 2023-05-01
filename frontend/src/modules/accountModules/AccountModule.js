import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = {};

/* 액션 타입 설정 */
const REGIST_USER = 'approval/Get_APPROVAL';

/* 메뉴 관련 액션 함수 */
export const { approval : { registUser }} = createActions({
    [REGIST_USER]: (res) => ({ accountUser : res })
});

/* 리듀서 함수 */
const menuReducer = handleActions(
    {   
        [REGIST_USER]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default menuReducer;

