import { Button, useMantineTheme } from "@mantine/core";
export const GsButton = ({ ...rest }) =>  {
    const theme = useMantineTheme();
    return (
        <Button radius="xl" h={40} color={{theme.colorScheme === 'dark' ? theme.colors.teal[4] : theme.colors.blue[6]}} { ...rest }>GetStarted</Button>
    );
}
export const GsLogoutButton = ({ ...rest }) =>  {
    return (
        <Button radius="md" h={40}  { ...rest }>LogOut</Button>
    );
}
