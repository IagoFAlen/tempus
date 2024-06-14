import { IoMdClose } from "react-icons/io";
import { Container } from "./styles";
import { LuPlus } from "react-icons/lu";

export function NoteItem({ $isnew = false, value, onClick, ...rest }){
    return(
        <>
            <Container $isnew={$isnew}>
                <input 
                        type="text"
                        value={value}
                        readOnly={!$isnew}
                        {...rest}
                    />

                <button 
                    type="button"
                    onClick={onClick}
                    className={$isnew ? 'button-add' : 'button-delete'}
                >
                    { $isnew ? <LuPlus /> : <IoMdClose /> }
                </button>
            </Container>
        </>
    );
}