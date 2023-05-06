// import { useEffect } from 'react';
// import { useSelector, useDispatch} from 'react-redux';
// import { callGetEmployeeAPI } from '../../api/AccountAPICalls';

// function Menu({ id }) {

//     const result = useSelector(state => state.accountReducer);
//     const user = result.searchUser;
//     const dispatch = useDispatch();
    
//     useEffect(
//         () => {
//             dispatch(callGetEmployeeAPI(id));
//         },
//         []
//     );

//     return (

//         user && (
//             <div>
//                 <h3>메뉴 이름 : { user[0].DRINK_NAME_KOR }</h3>
//                 <h3>메뉴 영문이름 : { user[0].DRINK_NAME_ENG }</h3>
//                 <h3>메뉴 가격 : { user[0].DRINK_PRICE }</h3>
//                 <h3>메뉴 크기 : { user[0].DRINK_SIZE }</h3>
//                 <h3>메뉴 종류 : { user[0].DRINK_TYPE_KOR }</h3>
//                 <h3>메뉴 설명 : { user[0].DRINK_INFO }</h3>
//                 <img src={ user[0].DRINK_IMAGE } style={ { maxWidth: 500 } } alt={ user[0].DRINK_NAME_KOR }/>
//             </div>
//         )
//     );
// }

// export default Menu;