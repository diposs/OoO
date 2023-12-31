import { Group, Paper, Blockquote, Button, SimpleGrid, Text, rem, Stack } from '@mantine/core';
import {
  IconUserPlus,
  IconDiscount2,
  IconReceipt2,
  IconCoin,
  IconSettings,
  IconBuildingLighthouse,
} from '@tabler/icons-react';
import  useStyles  from '../style/StatsGrid.style';

const icons = {
  user: IconUserPlus,
  discount: IconDiscount2,
  receipt: IconReceipt2,
  coin: IconCoin,
  buildingLighthouse:IconBuildingLighthouse,
};

const data = [
  { title: 'Wallets', icon: 'receipt', value: '13,456'},
  { title: 'Post', icon: 'coin', value: '4,145'},
  { title: 'NFTs', icon: 'discount', value: '745' },
  { title: 'LightHouse', icon: 'buildingLighthouse', value: '10'},
  { title: 'MarketPlace Listings', icon: 'user', value: '188'},
] as const;

export function StatsGrid() {
  const { classes } = useStyles();
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    const d = new Date(Date.now());
    let textDate = d.toDateString();
    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group position="apart">
          <Text size="xs" color="dimmed" className={classes.title}>
            {stat.title}
          </Text>
          <Icon className={classes.icon} size="1.4rem" stroke={1.5} />
        </Group>

        <Group align="flex-end" spacing="xs" mt={25}>
          <Text className={classes.value}>{stat.value}</Text>
        </Group>

        <Text fz="xs" c="dimmed" mt={7}>
          Total Count Updated at {textDate}
        </Text>
      </Paper>
    );
  });
  return (
    <div className={classes.root}>
      <Group position="apart">
        <Text className={classes.value}>DASHBOARD</Text>
      <Blockquote cite="– KOBE A.K.A 'MAMBA'">
      HAVE A DREAM? SACRIFICE FOR IT, AND NEVER, EVER REST IN THE MIDDLE.
    </Blockquote>
          <Button
            variant="subtle"
            component="a"
            href="../dashboard/settings"
            leftIcon={<IconSettings size={rem(18)} />}
          >
            <Text size="xs"  className={classes.title}>Settings</Text>
          </Button>
        </Group>
      <SimpleGrid breakpoints={[ {minWidth: 'base', cols: 1}, {minWidth: 'xs', cols: 2}, {minWidth: 'md', cols: 5 },]}>{stats}</SimpleGrid>
    </div>
  );
}
