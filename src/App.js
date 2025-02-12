
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout'; 
import Login from './components/Login';
import Home from './components/Home';
import { AuthContextProvider } from './components/shared/Auth-context';
import Register from './components/Register';
import Root from './components/Root';
import ProtectedRoutes from './components/shared/ProtectedRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
     <AuthContextProvider>
     <Layout>
        <Routes>
          <Route path="/" element={<Root/>}/>
          <Route path="/login" element={<ProtectedRoutes accessBy="non-autherized"><Login/></ProtectedRoutes> }/>
          <Route path="/home" element={<ProtectedRoutes accessBy="autherized"><Home/></ProtectedRoutes>} />
          <Route path="/Register" element={<ProtectedRoutes accessBy="non-autherized"><Register/></ProtectedRoutes> }/>
        </Routes>
      </Layout>
      <ToastContainer position="top-right" />
     </AuthContextProvider>
    </div>
  );
}

export default App;
