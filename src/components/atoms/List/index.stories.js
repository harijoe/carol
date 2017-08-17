import React from 'react'
import { storiesOf } from '@storybook/react'
import { List, ListItem } from 'components'

storiesOf('List with ListItem', module)
  .add('Default', () =>
    <List>
      <ListItem>A Item</ListItem>
      <ListItem>D Item</ListItem>
      <ListItem>B Item</ListItem>
    </List>,
  )
  .add('Ordered', () =>
    <List ordered>
      <ListItem>A Item</ListItem>
      <ListItem>D Item</ListItem>
      <ListItem>B Item</ListItem>
    </List>,
  )
