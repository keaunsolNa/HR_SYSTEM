import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = {};

/* 액션 타입 설정 */
const CREATE_USER = 'account/CREATE_USER'
/* 메뉴 관련 액션 함수 */
export const { account : { createUser }} = createActions({
    [CREATE_USER]: (res) => ({ regist : res }),
});

/* 리듀서 함수 */
const menuReducer = handleActions(
    {   
       
        [CREATE_USER]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default menuReducer;

