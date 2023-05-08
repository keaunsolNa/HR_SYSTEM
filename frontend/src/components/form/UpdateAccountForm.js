import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetUser, updateUser } from "../../api/AccountAPICalls"

function UpdateAccountForm({ id }) {

    const result = useSelector(state => state.accountReducer);
    const user = result.getUser;

    const dispatch = useDispatch();

    const [registUser, setRegistUser] = useState(
        {
            empId: '',
            password: '',
            birthYmd: '',
            careerNum: '',
            ctzNo : '',
            dutyCd: '',
            email: '',
            empName: '',
            empNo: '',
            genderCd: '',
            hireYmd: '',
            ...user,

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

            dispatch(callGetUser(id));
        },
        []
    );

    const onClickHandler = () => {

        dispatch(updateUser(registUser));
        
    }

    console.log(user)
    return (
        user && (
            <div className="commonForm">
                <label> 사원 아이디 : </label>
                <input type="text" name="empId" value={ user.empId || '' } onChange={ onChangeHandler }  />
                <br/>
                <br/>
                <label> 비밀 번호 : </label>
                <input type="password" name="password" value={ user.password || ''} onChange={ onChangeHandler }  />
                <br/>
                <br/>
                <label> 생년월일 : </label>
                <input type="date" name="birthYmd" value={ user.birthYmd || ''} onChange={ onChangeHandler} />
                <br/>
                <br/>
                <label> 근속 년수: </label>
                <input type="number" name="careerNum" value={ user.careerNum || '' } onChange={ onChangeHandler }  />
                <br/>
                <br/>
                <label> 주민 번호: </label>
                <input type="text" name="ctzNo" value={ user.ctzNo || '' } onChange={ onChangeHandler }  />
                <br/>
                <br/>
                <label> 직책 : </label>
                <input type="text" name="dutyCd" value={ user.dutyCd || '' } onChange={ onChangeHandler }  />
                <br/>
                <br/>
                <label> 이메일: </label>
                <input type="email" name="email" value={ user.email || '' } onChange={ onChangeHandler }  />
                <br/>
                <br/>
                <label> 이름 : </label>
                <input type="text" name="empName" value={ user.empName || '' } onChange={ onChangeHandler }  />
                <br/>
                <br/>
                <label> 사번: </label>
                <input type="number" name="empNo" value={ user.empNo || '' } onChange={ onChangeHandler }  />
                <br/>
                <br/>
                <label> 성별 : </label>
                <select name="genderCd" value={ user.genderCd || '' } onChange={ onChangeHandler } >
                    <option>F</option>
                    <option>M</option>
                </select>
                <br/>
                <br/>
                <label> 입사일 : </label>
                <input type="date" name="hireYmd" value={ user.hireYmd || ''} onChange={ onChangeHandler} />
                <br/>
                <br/>
                <label> 정보 수정 : </label>
                <button onClick={ onClickHandler }>Click </button>
            </div>
        )
    )
    
}

export default UpdateAccountForm;