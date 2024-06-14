import { Container } from "./styles"

export function Button({ title, icon: Icon, inverse=false, ...rest }){
    return(
        <>
            <Container $inverse={inverse} {...rest}>
                { Icon && <Icon /> }
                <span>{ title }</span>
            </Container>
        </>
    )
};
