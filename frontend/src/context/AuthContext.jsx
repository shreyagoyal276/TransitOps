import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(

        JSON.parse(localStorage.getItem("user")) || null

    );

    const [token, setToken] = useState(

        localStorage.getItem("token") || ""

    );

    const login = (userData, jwt) => {

        localStorage.setItem("user", JSON.stringify(userData));

        localStorage.setItem("token", jwt);

        setUser(userData);

        setToken(jwt);

    };

    const logout = () => {

        localStorage.clear();

        setUser(null);

        setToken("");

    };

    return (

        <AuthContext.Provider

            value={{

                user,

                token,

                login,

                logout

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}