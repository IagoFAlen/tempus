import { Container } from "./styles";

export function Tag({ title, icon: Icon, newtag = false, handleTag, ...rest }){
    return(
        <>
            <Container $newtag={newtag}>
                { newtag && <input {...rest}/>}
                { title }
                {Icon && <Icon onClick={handleTag} />}
            </Container>
        </>
    )
}