import { useContext } from "react";
import AuthContext from "./Auth-context";
import { Navigate } from "react-router-dom";

const ProtectedRoutes=({children,accessBy})=>{
const {user}=useContext(AuthContext);
if(accessBy==="autherized"){
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
}
else if(accessBy==="non-autherized"){
    return children;
}
return <Navigate to="/login"></Navigate>

}
export default ProtectedRoutes;