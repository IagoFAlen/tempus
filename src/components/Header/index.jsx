import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Input"
import { Logo } from "../Logo"
import { Container, InputBox, Title, Titles, UserInfo, UserMenu } from "./styles"
import { MdOutlineSearch } from "react-icons/md";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from '../../assets/user.svg';
import { useEffect, useState } from "react";

export function Header(){
    const { signOut, user } = useAuth();
    const [ search, setSearch ] = useState("");
    const [ titles, setTitles ] = useState();

    const navigate = useNavigate();

    function handleProfile(){
        navigate("/profile");
    }

    function handlePreview(id){
        navigate(`/preview/${id}`);
        navigate(0);
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    useEffect(() => {
        async function fetchCapsules(){
            const response = await api.get(`/notes?title=${search}`);
            setTitles(response.data);
        }

        fetchCapsules();

        if(!search){
            setTitles("");
        }

    }, [search])

    return(
        <>
            <Container>
                <Link to="/">
                    <Logo />
                </Link>
                <InputBox>
                    <Input icon={MdOutlineSearch} placeholder="Search using title" onChange={ event => setSearch(event.target.value)}/>
                    {
                        search &&
                        <Titles>
                            {
                                titles &&
                                titles.map(title => <Title key={String(title.id)} onClick={() => handlePreview(title.id)}>{title.title}</Title>)
                            }
                        </Titles>
                    }
                        
                </InputBox>
                <UserMenu>
                    <UserInfo>
                        <h4 onClick={handleProfile}>{user.name}</h4>
                        <Link to="/">
                            <span onClick={signOut}>Leave</span>
                        </Link>
                    </UserInfo>
                    <img src={avatarUrl} alt="User image" onClick={handleProfile}/>
                </UserMenu>
            </Container>
        </>
    )
}
