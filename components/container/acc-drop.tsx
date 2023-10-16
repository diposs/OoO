import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons-react';
import { Accordion, useMantineTheme, rem } from '@mantine/core';
import  useStyles  from '../style/StatsGrid.style';

export function AccDrop() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const getColor = (color: string) => theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7];

  return (
    <Accordion variant="separated" defaultValue="wallets" className={classes.root}>
      <Accordion.Item value="wallets">
        <Accordion.Control icon={<IconPhoto size={rem(20)} color={getColor('red')} />}>
          wallets
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="NFTs">
        <Accordion.Control icon={<IconPrinter size={rem(20)} color={getColor('blue')} />}>
          NFTS
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="SWAPS">
        <Accordion.Control icon={<IconCameraSelfie size={rem(20)} color={getColor('teal')} />}>
          SWAPS
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="LIKES">
        <Accordion.Control icon={<IconPrinter size={rem(20)} color={getColor('blue')} />}>
         LIKES
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="POSTs">
        <Accordion.Control icon={<IconCameraSelfie size={rem(20)} color={getColor('teal')} />}>
          POSTs
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="LISTINGs">
        <Accordion.Control icon={<IconPrinter size={rem(20)} color={getColor('blue')} />}>
          MARKETPLACE LISTINGS
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="ENCRYPTED POST">
        <Accordion.Control icon={<IconCameraSelfie size={rem(20)} color={getColor('teal')} />}>
          Camera settings
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
