import { Button, useMantineColorScheme  } from "@mantine/core";
export const GsButton = ({ ...rest }) =>  {
    const { colorScheme } = useMantineColorScheme();
    return (
        <Button radius="xl" h={40} color={colorScheme === 'dark' ? 'teal.4' : 'blue.6' } { ...rest }>GetStarted</Button>
    );
}
export const GsLogoutButton = ({ ...rest }) =>  {
    return (
        <Button radius="md" h={40}  { ...rest }>LogOut</Button>
    );
}
