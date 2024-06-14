import { GoArrowLeft } from "react-icons/go"
import { Header } from "../../components/Header"
import { Container, Content, SectionTitle, Fill, InputTitle, InputRating, InputDescription, Ticket, TicketTitle, TicketTags, TicketButtons } from "./styles"
import { Back } from "../../components/Back"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button";
import { Link } from "react-router-dom"
import { useState } from "react"
import { NoteItem } from "../../components/NoteItem"
import { useAuth } from "../../hooks/auth"

export function Create(){
    const { createCapsule } = useAuth();

    const [ tags, setTags ]     = useState([]);
    const [ newTag, setNewTag ] = useState("");

    const [ description, setDescription ] = useState("");
    const [ rating, setRating ] = useState("");
    const [ title, setTitle ] = useState("");

    function handleAddTag(){
        if(newTag.length > 0){
            setTags(prevState => [...prevState, newTag]);
            setNewTag("");
        }
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleCreateCapsule(){
        if(!title){
            return alert('Title is missing');
        }

        if(newTag){
            return alert('Did you forget to add tag?');
        }


        const formatRating = Number(rating);
        const note = {
            title,
            ratings: formatRating,
            description,
            tags
        }

        await createCapsule({ note });
    }

    return(
        <>
            <Container>
                <Header />
                <Content>
                    <Link to="/">
                        <Back icon={GoArrowLeft} title="Back"/>
                    </Link>
                    <SectionTitle>New capsule</SectionTitle>
                    <Fill>
                        <InputTitle>
                            <Input placeholder="Title" required onChange={event => setTitle(event.target.value)}/>
                        </InputTitle>
                        <InputRating>
                            <Input placeholder="Your rating (from 0 to 5)" required type="number" onChange={event => setRating(event.target.value)}/>
                        </InputRating>
                        <InputDescription placeholder="Description" required onChange={event => setDescription(event.target.value)}/>
                    </Fill>
                    <Ticket>
                        <TicketTitle>Tags</TicketTitle>
                        <TicketTags>
                            {
                                tags.map((tag, index) => (
                                    <NoteItem 
                                        key={String(index)}
                                        value={tag}
                                        onClick={ () => handleRemoveTag(tag) }
                                    />
                                ))
                            }
                            <NoteItem 
                                $isnew
                                placeholder="New Tag"
                                onChange={event => setNewTag(event.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />

                        </TicketTags>
                        <TicketButtons>
                            <Button title="Delete capsule" inverse={true}/>
                            <Button title="Save modifications" onClick={handleCreateCapsule}/>
                        </TicketButtons>
                    </Ticket>
                </Content>
            </Container>
        </>
    )
}