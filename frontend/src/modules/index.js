import { combineReducers } from "redux";
import accountReducer from "./accountModules/AccountModule";
import approvalReducer from "./approvalModules/ApprovalModule";

const rootReducer = combineReducers({
    accountReducer,
    approvalReducer
});

export default rootReducer;