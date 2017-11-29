import React from 'react'
import { storiesOf } from '@storybook/react'
import List from 'components/List'
import ListItem from 'components/ListItem'

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
