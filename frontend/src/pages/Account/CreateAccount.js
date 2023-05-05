
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTempuserAPI } from '../../api/UserAPICalls';
function CreateAccount() {

    const result = useSelector(state => state.accountReducer);
    const dispatch = useDispatch();

    const [registUser, setRegistUser] = useState(
        {
            userName: '',
            hireCd: '정규직 신입',
            posGrdCd: '사원',
            orgCd: '사업1부',
            posCd: '사원'

        }
    );

    const onChangeHandler = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        let hireCdValue = 0;
        let orgCdValue = 0;
        let posGrdCdValue = 0;
        let posCdValue = 0;

        // eslint-disable-next-line
        switch(name) {

            case 'hireCd' :
                switch(value) {
                    case '정규직 신입' : 
                        hireCdValue = 100;
                        break;

                    case '정규직 경력' : 
                        hireCdValue = 200;
                        break;

                    case '인턴' : 
                        hireCdValue = 300;
                        break;

                    case '계약직' : 
                        hireCdValue = 400;
                        break;

                    case '외부 파견 인재' : 
                        hireCdValue = 500;
                        break;

                    default : hireCdValue = 100;
                }
            
            // eslint-disable-next-line
            case 'posGrdCd' :

                switch(value) {
                    case '외부인원' : 
                        posGrdCdValue = 100;
                        break;

                    case '인턴' :
                        posGrdCdValue = 200;
                        break;

                    case '계약직' :
                        posGrdCdValue = 300;
                        break;

                    case '사원' :
                        posGrdCdValue = 400;
                        break;

                    case '대리1년차' :
                        posGrdCdValue = 500;
                        break;

                    case '대리2년차' : 
                        posGrdCdValue = 510;
                        break;

                    case '대리3년차' :
                        posGrdCdValue = 520;
                        break;

                    case '과장1년차' :
                        posGrdCdValue = 600;
                        break;

                    case '과장2년차' :
                        posGrdCdValue = 610;
                        break;

                    case '과장3년차' :
                        posGrdCdValue = 620;
                        break;

                    case '차장1년차' :
                        posGrdCdValue = 700;
                        break;

                    case '차장2년차' :
                        posGrdCdValue = 710;
                        break;

                    case '차장3년차' :
                        posGrdCdValue = 720;
                        break;

                    case '부장1년차' :
                        posGrdCdValue = 800;
                        break;

                    case '부장2년차' :
                        posGrdCdValue = 810;
                        break;

                    case '부장3년차' :
                        posGrdCdValue = 820;
                        break;

                    case '이사1년차' :
                        posGrdCdValue = 900;
                        break;

                    case '이사2년차' :
                        posGrdCdValue = 910;
                        break;

                    case '이사3년차' :
                        posGrdCdValue = 920;
                        break;

                    case '상무1년차' :
                        posGrdCdValue = 1000;
                        break;

                    case '상무2년차' :
                        posGrdCdValue = 1010;
                        break;

                    case '상무3년차' :
                        posGrdCdValue = 1020;
                        break;

                    case '전무1년차' :
                        posGrdCdValue = 1100;
                        break;

                    case '전무2년차' :
                        posGrdCdValue = 1120;
                        break;

                    case '전무3년차' :
                        posGrdCdValue = 1130;
                        break;

                    case '부사장' :
                        posGrdCdValue = 1200;
                        break;

                    case '사장' :              
                        posGrdCdValue = 1300;
                        break;
                    
                    default : posGrdCdValue = 400;
                }

            // eslint-disable-next-line
            case 'orgCd' : 

                switch(value) {

                    case '사업1부' : 
                        orgCdValue = 100;
                        break;

                    case '사업2부' : 
                        orgCdValue = 200;
                        break;

                    case '사업3부' : 
                        orgCdValue = 300;
                        break;

                    case '사업4부' : 
                        orgCdValue = 400;
                        break;

                    case '사업5부' : 
                        orgCdValue = 500;
                        break;         
                        
                    default : 
                        orgCdValue = 100;
                }

            // eslint-disable-next-line
            case 'posCd' :

                switch(value) {
                    case '외부인원' :
                        posCdValue = 100;
                        break;
                    case '인턴' :
                        posCdValue = 200;
                        break;
                    case '계약직' :
                        posCdValue = 300;
                        break;
                    case '사원' :
                        posCdValue = 400;
                        break;
                    case '대리' :
                        posCdValue = 500;
                        break;
                    case '과장' :
                        posCdValue = 600;
                        break;
                    case '차장' :
                        posCdValue = 700;
                        break;
                    case '부장' :
                        posCdValue = 800;
                        break;
                    case '이사' :
                        posCdValue = 900;
                        break;
                    case '상무' :
                        posCdValue = 1000;
                        break;
                    case '전무' :
                        posCdValue = 1100;
                        break;
                    case '부사장' :
                        posCdValue = 1200;
                        break;
                    case '사장' :
                        posCdValue = 1300;
                        break;
                    default :
                        posCdValue = 400;
                }
        }

        setRegistUser(
            {
                hireCd : hireCdValue,
                posGrdCd : posGrdCdValue,
                orgCd : orgCdValue,
                posCd : posCdValue,
                ...registUser,
                [name] : value
            }
        );

    }

    useEffect(
        () => {
            /* 메뉴 등록 완료 확인 후 /menu로 이동 */
           
            if(result.regist) {
                alert('사원 등록');
            }
            
        },
        [result]
    );

      const onClickHandler = () => {
        /* registMenu에 대한 유효성 검사 후 호출 */
        dispatch(createTempuserAPI(registUser));
    }

    return (
        <div style={{ 
            fontsize: '24px',
            marginLeft: '37%',
            textAlign: 'left',
            marginTop: '50px',
          }}>
            <label>사원 이름 : </label>
            <input type="text" name="userName" value={ registUser.userName } onChange={ onChangeHandler }/>
            <br/>
            <br/>
            <label>입사 구분 : </label>
            <select name="hireCd" value={ registUser.hireCd } onChange={ onChangeHandler }>
                <option>정규직 신입</option>
                <option>정규직 경력</option>
                <option>인턴</option>
                <option>계약직</option>
                <option>외부 파견 인재</option>
            </select>
            <br/>
            <br/>
            <label>직급 : </label>
            <select name="posGrdCd" value={ registUser.posGrdCd } onChange={ onChangeHandler }>
                <option>외부인원</option>
                <option>인턴</option>
                <option>계약직</option>
                <option>사원</option>
                <option>대리1년차</option>
                <option>대리2년차</option>
                <option>대리3년차</option>
                <option>과장1년차</option>
                <option>과장2년차</option>
                <option>과장3년차</option>
                <option>차장1년차</option>
                <option>차장2년차</option>
                <option>차장3년차</option>
                <option>부장1년차</option>
                <option>부장2년차</option>
                <option>부장3년차</option>
                <option>이사1년차</option>
                <option>이사2년차</option>
                <option>이사3년차</option>
                <option>상무1년차</option>
                <option>상무2년차</option>
                <option>상무3년차</option>
                <option>전무1년차</option>
                <option>전무2년차</option>
                <option>전무3년차</option>
                <option>부사장</option>
                <option>사장</option>
            </select>
            <br/>
            <br/>
            <label>부서 : </label>
            <select name="orgCd" value={ registUser.orgCd } onChange={ onChangeHandler }>
                <option>사업1부</option>
                <option>사업2부</option>
                <option>사업3부</option>
                <option>사업4부</option>
                <option>사업5부</option>
            </select>
            <br/>
            <br/>
            <label>직위 : </label>
            <select name="posCd" value={ registUser.posCd } onChange={ onChangeHandler }>
                <option>외부인원</option>
                <option>인턴</option>
                <option>계약직</option>
                <option>사원</option>
                <option>대리</option>
                <option>과장</option>
                <option>차장</option>
                <option>부장</option>
                <option>이사</option>
                <option>상무</option>
                <option>전무</option>
                <option>부사장</option>
                <option>사장</option>
            </select>
            <br/>
            <br/>
            <button onClick={ onClickHandler }>신규 사원 아이디 생성</button>
        </div>
    );
}

export default CreateAccount;