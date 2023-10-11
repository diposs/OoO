import { Button, useMantineColorScheme, Group  } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {ColorSchemeToggle } from "../ColorSchemeToggle";
export const GsButton = ({ ...rest }) =>  {
    const { colorScheme } = useMantineColorScheme();
    const matches = useMediaQuery('(min-width: 48em)');
    return (
        <Group spacing="lg">
            <ColorSchemeToggle sx={(theme) => ({display: matches ? 'flex' : 'none',})} />
            <Button radius="xl" h={40} color={colorScheme === 'dark' ? 'teal.4' : 'blue.6' } { ...rest }>GetStarted</Button>
        </Group>
    );
}
export const GsLogoutButton = ({ ...rest }) =>  {
    const { colorScheme } = useMantineColorScheme();
    const matches = useMediaQuery('(min-width: 48em)');
    return (
        <Group spacing="lg">
            <ColorSchemeToggle sx={(theme) => ({display: matches ? 'flex' : 'none',})} />
            <Button radius="md" h={40} color={colorScheme === 'dark' ? 'teal.4' : 'blue.6' }  { ...rest }>LogOut</Button>
        </Group>
    );
}
