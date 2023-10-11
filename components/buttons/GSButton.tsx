import { Button, useMantineColorScheme, Group, packSx, Sx, DefaultProps  } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {ColorSchemeToggle } from "../ColorSchemeToggle";

interface GsButtonProps extends DefaultProps {vdx?:Sx | Sx[]}
interface GsLogoutButtonProps extends DefaultProps {vdx?:Sx | Sx[]}

export const GsButton = ({ vdx, ...rest }:GsButtonProps) =>  {
    const { colorScheme } = useMantineColorScheme();
    const matches = useMediaQuery('(min-width: 48em)');
    return (
        <Group spacing="lg" sx={[...packSx(vdx)]}>
            <ColorSchemeToggle sx={{display: matches ? 'flex' : 'none'}} />
            <Button radius="xl" h={40} color={colorScheme === 'dark' ? 'teal.4' : 'blue.6' } { ...rest }>GetStarted</Button>
        </Group>
    );
}
export const GsLogoutButton = ({ vdx, ...rest }:GsLogoutButtonProps) =>  {
    const { colorScheme } = useMantineColorScheme();
    const matches = useMediaQuery('(min-width: 48em)');
    return (
        <Group spacing="lg" sx={[...packSx(vdx)]}>
            <ColorSchemeToggle sx={{display: matches ? 'flex' : 'none'}} />
            <Button radius="md" h={40} color={colorScheme === 'dark' ? 'teal.4' : 'blue.6' }  { ...rest }>LogOut</Button>
        </Group>
    );
}
