import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
import Main from './pages/Main';

import ApporvalBoxManagement from './pages/approval/ApporvalBoxManagement';
import ApprovalLineManagement from './pages/approval/ApprovalLineManagement';
import ApprovalDoucumentManagement from './pages/approval/ApprovalDoucumentManagement';
import ApprovalStatemanagement from './pages/approval/ApprovalStatemanagement';

import CreateAccount from './pages/account/CreateAccount';
import TempAccount from './pages/account/TempAccount';
import EmployeeList from './pages/account/EmployeeList'
import DeleteAccount from './pages/account/DeleteAccount';
import UpdateAccount from './pages/account/UpdateAccount';

import UserLogin from './pages/common/userLogin';

import "./App.css";

function App() {
  const loginStatus = !!localStorage.getItem('isLogin');

  if(!loginStatus) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <UserLogin/> }/>
       </Routes>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
        
          <Route index element={ <Main/> }/>

          <Route path="account" >
            <Route path="create" element={ <CreateAccount/> }/>
            <Route path="temp" element={ <TempAccount/>} />
            <Route path=":id" element={ <EmployeeList/>} />
            <Route path="update" element={ <UpdateAccount/> }/>
            <Route path="delete" element={ <DeleteAccount/>}/>
          </Route>

          <Route path="approval" >
            <Route path="approvalBox" element={ <ApporvalBoxManagement/> }/>
            <Route path="approvalLine" element={ <ApprovalLineManagement/> }/>
            <Route path="approvalDocument" element={ <ApprovalDoucumentManagement/>}/>
            <Route path="approvalState" element={ <ApprovalStatemanagement/>}/>
          </Route>

          <Route path="pay" >
            <Route path="temp1" element={ <Main/> }/>
            <Route path="temp2" element={ <Main/> }/>
            <Route path="temp3" element={ <Main/>}/>
            <Route path="temp4" element={ <Main/>}/>
          </Route>

          <Route path="authority" >
            <Route path="temp1" element={ <Main/> }/>
            <Route path="temp2" element={ <Main/> }/>
            <Route path="temp3" element={ <Main/>}/>
            <Route path="temp4" element={ <Main/>}/>
          </Route>

          <Route path="system" >
            <Route path="temp1" element={ <Main/> }/>
            <Route path="temp2" element={ <Main/> }/>
            <Route path="temp3" element={ <Main/>}/>
            <Route path="temp4" element={ <Main/>}/>
          </Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;