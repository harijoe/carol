import React from 'react'
import { storiesOf } from '@storybook/react'
import Divider from 'components/Divider'
import Block from 'components/Block'
import Col from 'components/Col'

storiesOf('Divider', module).add('Default', () =>
  <Col>
    <Block>Before divider</Block>
    <Divider />
    <Block>After divider</Block>
  </Col>,
)
