import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { callGetUserId } from "../../api/UserAPICalls";

function ApporvalBoxManagement() {

    const userId = localStorage.getItem('jwtAuthToken');

    const dispatch = useDispatch();

    useEffect(
        () => {

            dispatch(callGetUserId(userId));
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    
    return (
        <div className="approvalParentBox">
            <div className="approvalMainContent">
                <h3>문서 함 관리</h3>
                <h3>문서 함 관리</h3>
            </div>
        </div>
    );
}

export default ApporvalBoxManagement;