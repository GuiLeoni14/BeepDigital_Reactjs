import { Container, Icon } from './styles';
type DefaultButtonProps = {
    text: string;
    iconUrl: string;
    customClass?: string;
};
export function DefaultButton({ text, customClass, iconUrl }: DefaultButtonProps) {
    return (
        <Container className={customClass}>
            {iconUrl && <Icon src={iconUrl} />}
            {text}
        </Container>
    );
}
