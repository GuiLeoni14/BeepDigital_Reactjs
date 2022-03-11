import { Container } from './styles';

type CardContactProps = {
    text: string;
    description: string;
    optionDescription?: string;
};

function CardContact({ text, description, optionDescription }: CardContactProps) {
    return (
        <Container>
            <h4>{text}</h4>
            <span>{description}</span>
            {optionDescription && <span>{optionDescription}</span>}
        </Container>
    );
}

export default CardContact;
