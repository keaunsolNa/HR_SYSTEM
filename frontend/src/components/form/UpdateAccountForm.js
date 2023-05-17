import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { callUpdateUser } from "../../api/AccountAPICalls"
import { passwordChager } from "./PasswordChanger"

function UpdateAccountForm({ data }) {

    const dispatch = useDispatch();
    const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const emailRegex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const ctzNoRegex = /^\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[-]\d{7}$/

    const  [registUser, setRegistUser] = useState ( {
        empId: '',
        userPassword: '',
        password2: '',
        checkPassword: '',
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

        if(totalCheck()) {
            dispatch(callUpdateUser(registUser));
            
            alert('사원 정보 변경 완료.')
            window.location.replace("/");
        }

    }

    const passwordCheck = () => {

        const { userPassword, password2 } = registUser;

        if(userPassword.match(passwordRegEx) === null) {
            setRegistUser({
                ...registUser,
                checkPassword: '❌비밀번호는 숫자 + 영문자 + 특수문자 조합으로 8자리 이상 입력해주세요! ❌',
            })
        }

        else if (userPassword === password2) {
            setRegistUser({
                ...registUser,
                checkPassword: '✅일치 ✅',
            });

        } else {

            setRegistUser({
                ...registUser,
                checkPassword: '❌불일치 ❌',
            });
        }
    };

    const emailCheck = () => {

        const { email } = registUser;

        console.log(email)
        if(email === null || email.match(emailRegex) === null ){
            setRegistUser({
                ...registUser,
                checkEmail: '❌이메일 형식이 아닙니다! ❌',
            })
        }

        else {
            setRegistUser({
                ...registUser,
                checkEmail: '✅일치 ✅',
            });
        }
    }

    const ctzNoCheck = () => {

        const { ctzNo } = registUser;

        if(ctzNo !== null && ctzNo.length === 6) {
            setRegistUser({
                ...registUser,
                ctzNo : ctzNo + "-"
            })
        }
    }

    const totalCheck = () => {

        if(registUser.checkEmail !== '✅일치 ✅') {
            alert('Email을 확인 해 주세요')
            return false;
        }

        else if(registUser.checkPassword !== '✅일치 ✅') {
            alert('Password를 확인 해 주세요')
            return false;
        }

        if(registUser.ctzNo.match(ctzNoRegex) === null) {
            alert('주민번호를 확인 해 주세요')
            return false;
        }

        return true;
    }

    const onClickHandlerPassword =() => {
    }

    useEffect(() => {
        setRegistUser(data);
    }, [data]);


    return (
        registUser && (
            <div className='commonForm'>
                <div>
                    <label> 비밀번호 변경 : </label>
                    <button onClick={ onClickHandlerPassword } className="commonBtn">Click </button>
                </div>
                <div> 
                    <label> 사원 아이디 : </label>
                    <input type="text" name="empId" value={ registUser.empId || '' } onChange={ onChangeHandler } readOnly={ !!registUser.empNo } />
                </div>
                <div>
                    <label> 비밀 번호 : </label>
                    <input type="password" name="userPassword" value={ registUser.userPassword || ''} onChange={ onChangeHandler } onKeyDown={ passwordCheck} />
                </div>
                <div>
                    <label> 비밀 번호 확인 : </label>
                    <input type="password" name="password2" value={ registUser.password2 || ''} onChange={ onChangeHandler } placeholder="비밀번호 확인" onKeyDown={ passwordCheck}  />
                </div>
                <div>
                    <label> 확인 : </label>
                    <input type="text" name="checkPassword" value={ registUser.checkPassword || ''} onChange={ onChangeHandler } readOnly={ !!registUser.checkPassword } />
                </div>
                <div>
                    <label> 생년월일 : </label>
                    <input type="date" name="birthYmd" value={ registUser.birthYmd || ''} onChange={ onChangeHandler} />
                </div>
                <div>
                    <label> 근속 년수: </label>
                    <input type="number" name="careerNum" value={ registUser.careerNum || '' } onChange={ onChangeHandler }  placeholder="정수로 입력해 주세요"/>
                </div>
                <div>
                    <label> 주민 번호: </label>
                    <input type="text" name="ctzNo" value={ registUser.ctzNo || '' } onChange={ onChangeHandler } onKeyDown={ ctzNoCheck } />
                </div>
                <div>
                    <label> 이메일: </label>
                    <input type="email" name="email" value={ registUser.email || '' } onChange={ onChangeHandler } onKeyDown={ emailCheck } placeholder="email을 입력해 주세요"/>
                </div>
                <div>
                    <label> 확인 : </label>
                    <input type="text" name="checkEmail" value={ registUser.checkEmail || '' } onChange={ onChangeHandler } readOnly={ !!registUser.checkPassword }  />
                </div>
                <div>
                    <label> 이름 : </label>
                    <input type="text" name="empName" value={ registUser.empName || '' } onChange={ onChangeHandler } readOnly={ !!registUser.empName } />
                </div>
                <div>
                    <label> 사번: </label>
                    <input type="number" name="empNo" value={ registUser.empNo || '' } onChange={ onChangeHandler } readOnly={ !!registUser.empNo } />
                </div>
                <div>
                    <label> 성별 : </label>
                    <select name="genderCd" value={ registUser.genderCd || '' } onChange={ onChangeHandler } >
                        <option>F</option>
                        <option>M</option>
                    </select>
                </div>
                <div>
                    <label> 입사일 : </label>
                    <input type="date" name="hireYmd" value={ registUser.hireYmd || ''} onChange={ onChangeHandler} />
                </div>
                <div>
                    <label> 제출 : </label>
                    <button onClick={ onClickHandler } className="commonBtn">Click </button>
                </div>
            </div>
        )
    )
    
}

export default UpdateAccountForm;