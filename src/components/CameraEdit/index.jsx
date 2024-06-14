import { Container } from "./styles";

export function CameraEdit({ icon: Icon, avatar, ...rest}){
    return(
        <>
            <Container>
                <img src={avatar} alt="Imagem de perfil do usuário" />

                <label htmlFor="avatar">
                    {Icon && <Icon />}
                    <input type="file" id="avatar" {...rest}/>
                </label>
            </Container>
        </>
    )
}