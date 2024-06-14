import { api } from "../../services/api";

import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Back } from "../../components/Back";
import { Input } from "../../components/Input";
import { Background, Container, Content, ContentBox, InputsWrapper, LoginWrapper, LogoWrapper } from "./styles";
import { Button } from "../../components/Button";
import { GoArrowLeft } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function SignUp(){
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password){
            return alert('Preencha todos os campos!');  
        }

        api.post("/users", { name, email, password })
        .then( () => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        })
        .catch( error => {
            if(error.response){
                alert(error.response.data.message);
            } else{
                alert("Não foi possível cadastrar");
            }
        }

        )
    }
    
    return(
        <>
            <Container>
                <Content>
                    <ContentBox>
                        <LogoWrapper>
                            <h2>Tempus</h2>
                            <p>Your stories, preserved for generations to come.</p>
                        </LogoWrapper>
                        <LoginWrapper>
                            <h3>Register your account</h3>
                        </LoginWrapper>

                        <InputsWrapper>
                            <Input icon={FiUser} placeholder="Name" onChange={event => setName(event.target.value)} />
                            <Input icon={FiMail} placeholder="E-mail" onChange={event => setEmail(event.target.value)} />
                            <Input icon={FiLock} placeholder="Password" type="password" onChange={event => setPassword(event.target.value)} />
                        </InputsWrapper>

                        <Button title="Create account" onClick={handleSignUp}/>

                        <Link to="/">
                            <Back icon={GoArrowLeft} title="Login" />
                        </Link>
                    </ContentBox>
                </Content>
                <Background />
            </Container>
        </>
    );
}

