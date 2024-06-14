import { LuPlus } from "react-icons/lu"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Note } from "../../components/Note"
import { ButtonWrapper, Collection, Container, Content, LinkWrapper, NoteBox } from "./styles"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api"


export function Home(){
    const [ data, setData ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserCapsules(){
            const response = await api.get('/notes');
            setData(response.data);
        }

        getUserCapsules();
    }, []);

    function handlePreview(id){
        console.log(id);
        navigate(`/preview/${id}`);
    }

    return(
        <>
            <Container>
                <Header />
                <Content>
                    <Collection>
                        <h2>Capsules</h2>
                                <ButtonWrapper>
                                    <LinkWrapper>
                                        <Link to="/create">
                                            <Button icon={LuPlus} title="Add capsule"/>
                                        </Link>
                                    </LinkWrapper>
                                </ButtonWrapper>
                    </Collection>
                    <NoteBox>
                            { 
                                data &&
                                data.map( capsule => (
                                    <Note 
                                        key={String(capsule.id)} 
                                        data={capsule} 
                                        onClick={() => handlePreview(capsule.id)}
                                        
                                    /> 
                                ))
                            }   
                    </NoteBox>
                </Content>
                    
            </Container>

        </>
    )
}