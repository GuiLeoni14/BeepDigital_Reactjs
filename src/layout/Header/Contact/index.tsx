import { Container, Icon, Text } from './styles';
type ContactProps = {
    text: string;
    description: string;
    icon: string;
};

function Contact({ text, description, icon }: ContactProps) {
    return (
        <Container>
            <Icon>
                <img src={icon} alt="" />
            </Icon>
            <Text>
                <h6>{text}</h6>
                <span>{description}</span>
            </Text>
        </Container>
    );
}

export default Contact;
