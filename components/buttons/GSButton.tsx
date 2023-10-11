import { Button, useMantineColorScheme, Group  } from "@mantine/core";
import {ColorSchemeToggle } from "../ColorSchemeToggle"
export const GsButton = ({ ...rest }) =>  {
    const { colorScheme } = useMantineColorScheme();
    return (
        <Group spacing="lg">
            <ColorSchemeToggle />
            <Button radius="xl" h={40} color={colorScheme === 'dark' ? 'teal.4' : 'blue.6' } { ...rest }>GetStarted</Button>
        </Group>
    );
}
export const GsLogoutButton = ({ ...rest }) =>  {
    return (
        <Group spacing="lg">
            <ColorSchemeToggle />
            <Button radius="md" h={40}  { ...rest }>LogOut</Button>
        </Group>
    );
}
