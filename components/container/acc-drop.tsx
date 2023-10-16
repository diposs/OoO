import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons-react';
import { Accordion, useMantineTheme, rem } from '@mantine/core';
import  useStyles  from '../style/StatsGrid.style';

export function AccDrop() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const getColor = (color: string) => theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7];
  const getBgColor = (color: string) => theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7];

  return (
    <Accordion variant="separated" multiple loop transitionDuration={1000} defaultValue={['wallets', 'NFTs','SWAPS','LIKES']} className={classes.root}>
      <Accordion.Item value="wallets" bg={theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.blue[0]}>
        <Accordion.Control icon={<IconPhoto size={rem(20)} color={getColor('red')} />}>
          WALLETS
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="NFTs" bg={theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.blue[0]}>
        <Accordion.Control icon={<IconPrinter size={rem(20)} color={getColor('blue')} />}>
          NFTS
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="lighthse" bg={theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.blue[0]}>
        <Accordion.Control icon={<IconCameraSelfie size={rem(20)} color={getColor('teal')} />}>
          LIGHTHOUSE
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="SWAPS & ROUTES" bg={theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.blue[0]}>
        <Accordion.Control icon={<IconCameraSelfie size={rem(20)} color={getColor('teal')} />}>
          SWAPS
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="LIKES" bg={theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.blue[0]}>
        <Accordion.Control icon={<IconPrinter size={rem(20)} color={getColor('blue')} />}>
         LIKES
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="POSTs" bg={theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.blue[0]}>
        <Accordion.Control icon={<IconCameraSelfie size={rem(20)} color={getColor('teal')} />}>
          POSTS
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="LISTINGs" bg={theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.blue[0]}>
        <Accordion.Control icon={<IconPrinter size={rem(20)} color={getColor('blue')} />}>
          MARKETPLACE LISTINGS
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="ENCRYPTED POST" bg={theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.blue[0]}>
        <Accordion.Control icon={<IconCameraSelfie size={rem(20)} color={getColor('teal')} />}>
          ENCRYPTED POSTS
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
