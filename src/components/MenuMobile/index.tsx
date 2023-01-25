import { Container } from './styles';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';

type Props = {
    menuIsVisible: boolean;
    setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuMobile({ menuIsVisible, setMenuIsVisible }: Props) {
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);

    return (
        <Container isVisible={menuIsVisible}>
            <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
            <nav>
                <a href="#">Home</a>
                <a href="#">Produtos</a>
                <a href="#">Sobre nós</a>
                <a href="#">Contato</a>
            </nav>
        </Container>
    )
}