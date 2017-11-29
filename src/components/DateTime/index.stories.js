import React from 'react'
import { storiesOf } from '@storybook/react'
import DateTime from 'components/DateTime'
import Col from 'components/Col'

storiesOf('Datetime', module).add('Default', () =>
  <Col>
    <DateTime value={'2017-06-21T14:00:00+00:00'} />
  </Col>,
)
