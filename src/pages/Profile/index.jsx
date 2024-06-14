import { GoArrowLeft } from "react-icons/go";
import { Back } from "../../components/Back";
import { CameraWrapper, Container, Content, Header, InputsWrapper, ProfileEdit, UserInfoWrapper } from "./styles";
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { CameraEdit } from "../../components/CameraEdit";
import avatarPlaceholder from "../../assets/user.svg";

import { api } from "../../services/api";

export function Profile(){
    const { user, updateProfile } = useAuth();

    const [ name, setName ] = useState(user.name);
    const [ email, setEmail ] = useState(user.email);
    const [ password, setPassword ] = useState("");
    const [ oldPassword, setOldPassword ] = useState("");

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const [ avatar, setAvatar ] = useState(avatarUrl);
    const [ avatarFile, setAvatarFile ] = useState(null);

    async function handleUpdate(){
        console.log(name);
        const updated = {
            name,
            email,
            password,
            old_password: oldPassword
        }
        
        const userUpdated = Object.assign(user, updated);
        
        await updateProfile({ user: userUpdated, avatarFile });

        
    }


    function handleChangeAvatar(event){
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return(
        <>
            <Container>
                <Header>
                    <Link to="/">
                        <Back icon={GoArrowLeft} title="Back"/>
                    </Link>
                </Header>
                <Content>
                    <ProfileEdit>
                            <CameraEdit icon={FiCamera} avatar={avatar} onChange={handleChangeAvatar}/>
                    </ProfileEdit>
                    <InputsWrapper>
                        <UserInfoWrapper>
                            <Input icon={FiUser} type="text" value={name} onChange={event => setName(event.target.value)}/>
                            <Input icon={FiMail} type="text" value={email} onChange={event => setEmail(event.target.value)}/>
                        </UserInfoWrapper>
                        <UserInfoWrapper>
                            <Input icon={FiLock} placeholder="Password" type="password" onChange={event => setPassword(event.target.value)}/>
                            <Input icon={FiLock} placeholder="Old password" type="password" onChange={event => setOldPassword(event.target.value)} />
                        </UserInfoWrapper>
                        <Button title="Save" onClick={handleUpdate}/>
                    </InputsWrapper>
                </Content>
            </Container>
        </>
    )
}