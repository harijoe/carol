import React from 'react'
import { storiesOf } from '@storybook/react'
import { Heading } from 'components'

storiesOf('Heading', module)
  .add('Default', () => (
    <Heading>
      Heading Text
    </Heading>
  ))
  .add('Level 1', () => (
    <Heading level={1}>
      Heading Text
    </Heading>
  ))
  .add('Level 2', () => (
    <Heading level={2}>
      Heading Text
    </Heading>
  ))
  .add('Level 3', () => (
    <Heading level={3}>
      Heading Text
    </Heading>
  ))
  .add('Level 4', () => (
    <Heading level={4}>
      Heading Text
    </Heading>
  ))
