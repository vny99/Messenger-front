import axios from "axios";
import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [liFlag, setLiFlag] = useState(true);
    const [lgFlag, setLgFlag] = useState(false);
    const [rgFlag, setRgFlag] = useState(true);

    const [user, setUser] = useState(() => {
        let userObject = localStorage.getItem("user");
        if (userObject) {
            return JSON.parse(userObject);
        }
        return null;
    });

    const navigate = useNavigate();
    
    const register = async (payload) => {
        let response = await axios.post("/api/auth/register", payload, {
            withCredentials: false
        }).catch(err => {
            return err.response.data;
        })

        return response;
    }
    const login = async (payload) => {
        await axios.post("/api/auth/authenticate", payload, {
            withCredentials: false,

        });
        const apiResponse = await axios.get("/api/user/getuser/" + payload.email, {
            withCredentials: true,
        });
        localStorage.setItem("user", JSON.stringify(apiResponse.data));
        setUser(apiResponse.data);
        setLgFlag(true);
        setLiFlag(false);
        setRgFlag(false);
        navigate("/home");

    }
    const logout = async () => {
        await axios.post("/api/auth/logout", {
            withCredentials: true,
        });
        localStorage.removeItem("user");
        setUser(null);
        setLgFlag(false);
        setLiFlag(true);
        setRgFlag(true);
        navigate("/");
    }

    return (
        <>
            <AuthContext.Provider value={{ user, login, register, logout, liFlag, setLgFlag, setLiFlag, setRgFlag, lgFlag, rgFlag }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
export default AuthContext;
