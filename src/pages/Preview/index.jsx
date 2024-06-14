import { Back } from "../../components/Back";
import { Header } from "../../components/Header";
import { Stars } from "../../components/Stars";
import { Container, Content, ContentBox, ContentInfo, Icon, Tags } from "./styles";
import { GoArrowLeft } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { Tag } from "../../components/Tag";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import avatarPlaceholder from '../../assets/user.svg';

export function Preview(){
    const { user } = useAuth();
    const [ data, setData ] = useState(null);
    const params = useParams();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    useEffect(() => {
        async function fetchCapsule(){
            const response = await api.get(`/notes/${params.id}`);
            setData(response.data);
        }

        fetchCapsule();
    }, []);

    return(
        <>
            <Container>
                <Header />
                {
                    data &&
                    <Content>
                        <Link to="/">
                            <Back icon={GoArrowLeft} title="Back"/>
                        </Link>
                        <ContentBox $gap="2rem">
                            <h2>{data.title}</h2>
                            <Stars ratings={data.ratings}/>
                        </ContentBox>
                        <ContentBox $gap=".8rem">
                            <ContentInfo>
                                <Icon>
                                    <img src={avatarUrl} alt="User image"/>
                                </Icon>
                                <span>Por { user.name }</span>
                            </ContentInfo>
                            <ContentInfo>
                                <CiClock2 />
                                <span>{ data.created_at }</span>
                            </ContentInfo>
                        </ContentBox>
                        <ContentBox $gap=".8rem">
                                {
                                    data.tags && 
                                    
                                    <Tags>
                                        {
                                            data.tags.map(tag => <Tag key={String(tag.id)} title={tag.name}/>)
                                        }
                                    </Tags>
                                }
                        </ContentBox>
                        <ContentBox>
                            <p>{data.description}</p>
                        </ContentBox>
                    </Content>
                }
            </Container>      
        </>
    )
};