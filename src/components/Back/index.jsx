import { Container } from "./styles";

export function Back({ icon: Icon, title, ...rest}){

    return(
        <>
            <Container>
                {Icon && <Icon size={24} />}
                <span>{ title }</span>
            </Container>
        </>
    )

}