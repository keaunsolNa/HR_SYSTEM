import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  callUpdateUser } from "../../api/AccountAPICalls"

function UpdateAccountForm({ data }) {

    const dispatch = useDispatch();

    const  [registUser, setRegistUser] = useState ( {
        empId: '',
        password: '',
        birthYmd: '',
        careerNum: '',
        ctzNo : '',
        email: '',
        empName: '',
        empNo: '',
        genderCd: '',
        hireYmd: '',
        ...data 
    });

    const onChangeHandler = (e) => {

        const { name, value } = e.target;

        setRegistUser(
            {
                ...registUser,
                [name] : value,
            }
        );

    }
    
    const onClickHandler = () => {

        dispatch(callUpdateUser(registUser));
        
        alert('사원 정보 변경 완료.')
        window.location.replace("/");
    }

    useEffect(() => {
        setRegistUser(data);
    }, [data]);


    return (
        registUser && (
            <div className='commonForm'>
                <div className='commonFormChild'> 
                    <label> 사원 아이디 : </label>
                    <input type="text" name="empId" value={ registUser.empId || '' } onChange={ onChangeHandler }  />
                    <br/>
                    <br/>
                    <label> 비밀 번호 : </label>
                    <input type="password" name="password" value={ registUser.password || ''} onChange={ onChangeHandler }  />
                    <br/>
                    <br/>
                    <label> 생년월일 : </label>
                    <input type="date" name="birthYmd" value={ registUser.birthYmd || ''} onChange={ onChangeHandler} />
                    <br/>
                    <br/>
                    <label> 근속 년수: </label>
                    <input type="number" name="careerNum" value={ registUser.careerNum || '' } onChange={ onChangeHandler }  />
                    <br/>
                    <br/>
                    <label> 주민 번호: </label>
                    <input type="text" name="ctzNo" value={ registUser.ctzNo || '' } onChange={ onChangeHandler }  />
                    <br/>
                    <br/>
                    <label> 이메일: </label>
                    <input type="email" name="email" value={ registUser.email || '' } onChange={ onChangeHandler }  />
                    <br/>
                    <br/>
                    <label> 이름 : </label>
                    <input type="text" name="empName" value={ registUser.empName || '' } onChange={ onChangeHandler }  />
                    <br/>
                    <br/>
                    <label> 사번: </label>
                    <input type="number" name="empNo" value={ registUser.empNo || '' } onChange={ onChangeHandler }  />
                    <br/>
                    <br/>
                    <label> 성별 : </label>
                    <select name="genderCd" value={ registUser.genderCd || '' } onChange={ onChangeHandler } >
                        <option>F</option>
                        <option>M</option>
                    </select>
                    <br/>
                    <br/>
                    <label> 입사일 : </label>
                    <input type="date" name="hireYmd" value={ registUser.hireYmd || ''} onChange={ onChangeHandler} />
                    <br/>
                    <br/>
                    <label> 정보 수정 : </label>
                    <button onClick={ onClickHandler } className="commonBtn">Click </button>
                </div>
            </div>
        )
    )
    
}

export default UpdateAccountForm;