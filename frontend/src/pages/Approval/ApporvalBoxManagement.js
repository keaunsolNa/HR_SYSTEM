function ApporvalBoxManagement() {

    return (
        <>
            <h3>문서 함 관리</h3>
        
        </>
    );
}

export default ApporvalBoxManagement;


// import { useEffect } from 'react';
// import { useSelector, useDispatch} from 'react-redux';
// import { callGetApproval } from '../../api/ApprovalAPICalls';

// function ApporvalBoxManagement( { id }) {

//     const result = useSelector(state => state.menuReducer);
//     const approval = result.approval;
//     const dispatch = useDispatch();

//     useEffect(
//         () => {
//             /* menu 호출 API */
//             dispatch(callGetApproval(id));
//         },
//         []
//     );

//     return (
//         approval && (
//             <div>
//                 <h3>문서 이름 : { approval[0].DRINK_NAME_KOR }</h3>
//                 <h3>발신 시간 : { approval[0].DRINK_NAME_ENG }</h3>
//                 <h3>문서 상태 : { approval[0].DRINK_PRICE }</h3>
//                 <h3>현 결재자 : { approval[0].DRINK_SIZE }</h3>
//                 <h3>메뉴 종류 : { approval[0].DRINK_TYPE_KOR }</h3>
//                 <h3>메뉴 설명 : { approval[0].DRINK_INFO }</h3>
//             </div>
//         )
//     );
// }

// export default ApporvalBoxManagement;