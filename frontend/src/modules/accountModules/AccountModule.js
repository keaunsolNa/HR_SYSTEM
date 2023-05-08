import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = {};

/* 액션 타입 설정 */
const CREATE_USER = 'account/CREATE_USER'
const SEARCH_USER = 'account/SEARCH_USER'
const GET_USER = 'account/GET_USER';
const UPDATE_USER = 'account/UPDATE_USER'

// 계정 관련 액션
export const { account : { createUser, searchUser, getUser, updateUser }} = createActions({

    [CREATE_USER]: (res) => ({ regist : res }),
    [SEARCH_USER]: (res) => ({ searchUser : res }),
    [GET_USER] : (res) => ({ getUser : res}),
    [UPDATE_USER] : (res) => ({ updateUser : res}),

});

/* 리듀서 함수 */
const menuReducer = handleActions(
    {   
       
        [CREATE_USER]: (state, { payload }) => {
            return payload;
        },

        [SEARCH_USER]: (state, { payload }) => {
            return payload;
        },

        [GET_USER] : (state, { payload}) => {

            return payload;
        },

        [UPDATE_USER] : (state, { payload}) => {

            return payload;
        }
    },
    initialState
);

export default menuReducer;

