import { Button, Icon } from './styles';
type DefaultButtonProps = {
    text: string;
    iconUrl?: string;
    customClass?: string;
};
export function DefaultButton({ text, customClass, iconUrl }: DefaultButtonProps) {
    return (
        <>
            {customClass === 'submit' ? (
                <Button type="submit" className={customClass}>
                    {text}
                </Button>
            ) : (
                <Button className={customClass}>
                    {iconUrl && <Icon src={iconUrl} />}
                    {text}
                </Button>
            )}
        </>
    );
}
