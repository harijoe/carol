import React from 'react'
import { storiesOf } from '@storybook/react'
import { Divider, Block, Col } from 'components'

storiesOf('Divider', module)
  .add('Default', () => (
    <Col>
      <Block>Before divider</Block>
      <Divider />
      <Block>After divider</Block>
    </Col>
  ))
