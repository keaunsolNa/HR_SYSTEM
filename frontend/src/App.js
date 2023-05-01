import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';

import ApporvalBoxManagement from './pages/Approval/ApporvalBoxManagement';
import ApprovalLineManagement from './pages/Approval/ApprovalLineManagement';
import ApprovalDoucumentManagement from './pages/Approval/ApprovalDoucumentManagement';
import ApprovalStatemanagement from './pages/Approval/ApprovalStatemanagement';

import CreateAccount from './pages/Account/CreateAccount';
import DeleteAccount from './pages/Account/DeleteAccount';
import UpdateAccount from './pages/Account/UpdateAccount';

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
        
          <Route index element={ <Main/> }/>

          <Route path="account" >
            <Route path="create" element={ <CreateAccount/> }/>
            <Route path="update" element={ <DeleteAccount/> }/>
            <Route path="delete" element={ <UpdateAccount/>}/>
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