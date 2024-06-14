import { Stars } from "../Stars";
import { Tag } from "../Tag";
import { Container, Tags } from "./styles";

export function Note({ data, ...rest }){
    return(
        <>
            <Container {...rest}>
                <h3>{ data.title }</h3>
                <Stars ratings={data.ratings}/>
                <p>{data.description}</p>
                <Tags>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
                    }
                </Tags>
            </Container>
        </>
    )
}