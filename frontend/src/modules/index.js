import { combineReducers } from "redux";
import accountReducer from "./accountModules/AccountModule";
import approvalReducer from "./approvalModules/ApprovalModule";
import userReducer from "./userModules/UserLoginModule";

const rootReducer = combineReducers({
    accountReducer,
    approvalReducer,
    userReducer
});

export default rootReducer;