import { createContext, useContext, useState } from "react";






const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    const [isloggedin, setisloggedin] = useState(false)

    const [userType, setuserType] = useState('')


    return <AuthContext.Provider value={{ isloggedin, setisloggedin, userType, setuserType }}>
        {children}
    </AuthContext.Provider>


}


export const useAuth = () => {

    const { isloggedin, setisloggedin, userType, setuserType } = useContext(AuthContext);

    return { isloggedin, setisloggedin, userType, setuserType }
}

