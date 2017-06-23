import React from 'react'
import { storiesOf } from '@storybook/react'
import { Bubble } from 'components'

storiesOf('Bubble', module)
  .add('Default', () => (
    <Bubble>Sample Text</Bubble>
  ))
