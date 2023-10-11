import { Title, useMantineColorScheme } from '@mantine/core';

export const Texto = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Title
      sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
      color = {colorScheme === 'dark' ? 'yellow.5' : 'grape.8'}
    >
      &#9854;
    </Title>
  );
}
