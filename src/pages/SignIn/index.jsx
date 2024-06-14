import { FiLock, FiMail } from "react-icons/fi";
import { Back } from "../../components/Back";
import { Input } from "../../components/Input";
import { Background, Container, Content, ContentBox, InputsWrapper, LoginWrapper, LogoWrapper } from "./styles";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth.jsx";
import { useState } from "react";


export function SignIn(){
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const { signIn } = useAuth();

    function handleSignIn(){
        signIn({ email, password });
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
                            <h3>Login here</h3>
                        </LoginWrapper>

                        <InputsWrapper>
                            <Input icon={FiMail} placeholder="E-mail" onChange={event => setEmail(event.target.value)} />
                            <Input icon={FiLock} placeholder="Password" type="password" onChange={event => setPassword(event.target.value)} />
                        </InputsWrapper>

                        <Button title="Enter" onClick={handleSignIn}/>

                        <Link to="/register">
                            <Back title="Create account" />
                        </Link>
                    </ContentBox>
                </Content>
                <Background />
            </Container>
        </>
    );
}

