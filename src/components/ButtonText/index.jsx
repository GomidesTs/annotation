import { Container } from './styles';


export function ButtonText({ title, isActive = false, ...res }) {
    return (
        <Container
            type='button'
            isActive={isActive}
            {...res}
        >
            {title}
        </Container>
    )
}