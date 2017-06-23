import React from 'react'
import { storiesOf } from '@storybook/react'
import { Block } from 'components'

storiesOf('Block', module)
  .add('Default', () => (
    <Block>Sample Text</Block>
  ))
