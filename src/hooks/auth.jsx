import { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [ data, setData ] = useState({});

    async function signIn({ email, password }){
        try{
            const response = await api.post('/sessions', { email, password });

            const { user, token } = response.data;

            localStorage.setItem('@tempus:user', JSON.stringify(user));
            localStorage.setItem('@tempus:token', token);

            api.defaults.headers.common['Authorization'] = `Bearer ${ token }`;
            setData({ user, token });
            
        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            } else{
                alert("Sorry, we couldn't Sign In. Try Again!");
            }
        }
    }

    function signOut(){
        localStorage.removeItem('@tempus:user');
        localStorage.removeItem('@tempus:token');

        setData({});

    }

    async function updateProfile({ user, avatarFile }){
        try{

            if(avatarFile){
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }
            
            await api.put("/users", user);
            localStorage.setItem("@tempus:user", JSON.stringify(user));

            setData({ user, token: data.token });

            alert("User successfully updated!")
            
        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            } else{
                alert("Sorry, we couldn't update your profile. Try again!");
            }
        }
    }

    async function createCapsule({ note }){
        try{
            await api.post("/notes", note);

            alert("Note successfully created!")
        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Sorry, we couldn't create your capsule. Try again!");
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('@tempus:token');
        const user = localStorage.getItem('@tempus:user');

        if(token && user){
            api.defaults.headers.common['Authorization'] = `Bearer ${ token }`;

            setData({
                token,
                user: JSON.parse(user)
            });
        }

    }, []);


    return(
        <AuthContext.Provider value={{ signIn, signOut, updateProfile, createCapsule, user: data.user }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);
    
    return context;

}

export { AuthProvider, useAuth };