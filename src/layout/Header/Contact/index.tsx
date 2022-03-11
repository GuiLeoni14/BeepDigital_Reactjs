import { Container, Icon, Text } from './styles';
type ContactProps = {
    text: string;
    description: string;
    icon: any;
};

function Contact({ text, description, icon }: ContactProps) {
    return (
        <Container>
            <Icon>
                <img src={icon} alt="" />
            </Icon>
            <Text>
                <h6>Siga-nos</h6>
                <span>inesquecíveis</span>
            </Text>
        </Container>
    );
}

export default Contact;
