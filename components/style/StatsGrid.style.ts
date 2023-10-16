import { createStyles } from '@mantine/core';


export default createStyles ((theme) => ({
  root: {
  padding: calc(1.25rem * 1.5),
},

value: {
  fontSize: rem(24px),
  fontWeight: 700,
  lineHeight: 1,
},

diff: {
  lineHeight: 1,
  display: flex,
  alignItems: center,
},

icon: {
  color: theme.colorScheme === 'dark' ? theme.colors.gray[3] : theme.colors.gray[4],
},

title: {
  fontWeight: 700,
  textTransform: uppercase,
},
})
)
