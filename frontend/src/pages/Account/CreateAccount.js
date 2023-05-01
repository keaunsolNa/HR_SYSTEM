
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callRegistMenuAPI } from '../../api/AccountAPICalls';

function CreateAccount() {

    const result = useSelector(state => state.accountReducer);
    const dispatch = useDispatch();

    const [registUser, setRegistUser] = useState(
        {
            userName: '',
            hireCd: '정규직 신입',
            posGrdCd: 100,
            orgCd: '사업1부',
            posCd: '사원'

        }
    );

    const onChangeHandler = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        let hireCdValue = 0;
        let orgCdValue = 0;
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
                }
            
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
                }
        }

        setRegistUser(
            {
                ...registUser,
                hireCd : hireCdValue,
                orgCd : orgCdValue,
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
        dispatch(callRegistMenuAPI(registUser));
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
                <option>100</option>
                <option>200</option>
                <option>300</option>
                <option>400</option>
                <option>500</option>
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