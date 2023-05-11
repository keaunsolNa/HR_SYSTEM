import GetDate from '../../../api/GetDate';

function Attendance() {

    return (
        <div>
            <div className="approvalTitle">
                <h3>근태 확인서</h3>
                <GetDate className="time"/>
            </div>

            <div className="approvalLine">

            </div>

            <div className="approvalMain">
                <div className="emplyee">
                    <label>대상자</label>
                    <label>부  서</label>
                    <label>성  명</label>
                    <label>직  급</label>
                </div>
            </div>

            <div className="approvalBottom">

            </div>
        </div>
    );
}

export default Attendance;