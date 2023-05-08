import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = {};
 
/* 액션 타입 설정 */
export const LOGIN = 'user/LOGIN';
export const RESET_LOGIN_USER = 'user/RESET_LOGIN_USER';
export const GET_LOGIN_USER = 'user/GET_LOGIN_USER';


/* 유저 관련 액션 함수 */
export const { user : { login, resetLoginUser, getLoginUser }} = createActions({
    [LOGIN]: (res) => ({ res }),
    [RESET_LOGIN_USER]: (res = initialState) => ({ res }),
    [GET_LOGIN_USER] : (res) => ({ getLoginUser : res }),
});

/* 리듀서 함수 */
const userReducer = handleActions(
    {   
        [LOGIN]: (state, { payload : {res} }) => {

            if(res) {
                /* localStorage에 로그인 상태 저장 */
                localStorage.setItem("isLogin", true);
            } else {
                res = { message : 'LOGIN_FAIL'};
            }

            return res;

        },
        [RESET_LOGIN_USER]: (state, { payload : { res } }) => {
            
            return res;

        },

        [GET_LOGIN_USER]: (state, { payload  }) => {

            if(payload.getLoginUser !== '토큰 기한 만료. 다시 로그인 해 주세요') {
                localStorage.setItem("userId", payload.getLoginUser);
            }

            return payload;
        },

    },
    initialState
);

export default userReducer;

