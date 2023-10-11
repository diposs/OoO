import { Button, useMantineColorScheme, Group, Sx } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {ColorSchemeToggle } from "../ColorSchemeToggle";

interface GsButtonProps {sx?:Sx}
interface GsLogoutButtonProps {sx?:Sx}

export const GsButton = ({ sx, ...rest }:GsButtonProps) =>  {
    const { colorScheme } = useMantineColorScheme();
    const matches = useMediaQuery('(min-width: 48em)');
    return (
        <Group spacing="lg" sx={[sx]}>
            <ColorSchemeToggle sx={{display: matches ? 'flex' : 'none'}} />
            <Button radius="xl" h={40} color={colorScheme === 'dark' ? 'teal.4' : 'blue.6' } { ...rest }>GetStarted</Button>
        </Group>
    );
}
export const GsLogoutButton = ({ sx, ...rest }:GsLogoutButtonProps) =>  {
    const { colorScheme } = useMantineColorScheme();
    const matches = useMediaQuery('(min-width: 48em)');
    return (
        <Group spacing="lg" sx={[sx]}>
            <ColorSchemeToggle sx={{display: matches ? 'flex' : 'none'}} />
            <Button radius="md" h={40} color={colorScheme === 'dark' ? 'teal.4' : 'blue.6' }  { ...rest }>LogOut</Button>
        </Group>
    );
}
