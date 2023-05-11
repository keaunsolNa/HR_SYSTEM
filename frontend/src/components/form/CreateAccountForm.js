
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTempuserAPI } from '../../api/AccountAPICalls';
function CreateAccount() {

    const result = useSelector(state => state.accountReducer);
    const dispatch = useDispatch();

    const [registUser, setRegistUser] = useState(
        {
            empName: '',
            password: '',
            hireCd: '정규직신입',
            posGrdCd: '사원',
            orgCd: '사업1부',
            posCd: '사원',
            empKindCd : '내부인원',
            jobCd : '사원',
            genderCd : '남성',

        }
    );

    const onChangeHandler = (e) => {

        const { name, value } = e.target;

        setRegistUser(
            {
                ...registUser,
                [name] : value,
            }
        );

    }


    useEffect(
        () => {
            /* 메뉴 등록 완료 확인 후 /menu로 이동 */
           
            if(result.regist) {
                alert(`등록 사원의 ID 는 '${result.regist.empId}' 입니다.` )
            }
            
        },
        [result]
    );

      const onClickHandler = () => {
        /* registMenu에 대한 유효성 검사 후 호출 */
        dispatch(createTempuserAPI(registUser));
    }

    return (
        <div className='commonForm'>
            <div> 
                <label>사원 이름 : </label>
                <input type="text" name="empName" value={ registUser.empName } onChange={ onChangeHandler }/>
            </div>
            <div> 
                <label>임시 비밀번호 : </label>
                <input type="password" name="password" value={ registUser.password } onChange={ onChangeHandler }/>
            </div>
            <div>
                <label>입사 구분 : </label>
                <select name="hireCd" value={ registUser.hireCd } onChange={ onChangeHandler }>
                    <option>정규직신입</option>
                    <option>정규직경력</option>
                    <option>인턴</option>
                    <option>계약직</option>
                    <option>외부 파견 인재</option>
                </select>
            </div>
            <div>
                <label>부서 : </label>
                <select name="orgCd" value={ registUser.orgCd } onChange={ onChangeHandler }>
                    <option>사업1부</option>
                    <option>사업2부</option>
                    <option>사업3부</option>
                    <option>사업4부</option>
                    <option>사업5부</option>
                </select>
            </div>
            <div>
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
            </div>
            <div>
                <label>직원구분코드 : </label>
                <select name="empKindCd" value={ registUser.empKindCd } onChange={ onChangeHandler }>
                    <option>외부인원</option>
                    <option>내부인원</option>
                </select>
            </div>
            <div>
                <label> 직무코드 : </label>
                <select name="jobCd" value={ registUser.jobCd } onChange={ onChangeHandler }>
                    <option>사원</option>
                    <option>보안담당자</option>
                    <option>인사담당자</option>
                    <option>재정담당자</option>
                    <option>사장</option>
                </select>
            </div>
            <div>
                <label>성별 : </label>
                <select name="genderCd" value={ registUser.genderCd } onChange={ onChangeHandler }>
                    <option>남성</option>
                    <option>여성</option>
                </select>
            </div>
            <div>
                <label> 제출 : </label>
                <button onClick={ onClickHandler } className="commonBtn">Click </button>
            </div>
        </div>
    );
}

export default CreateAccount;