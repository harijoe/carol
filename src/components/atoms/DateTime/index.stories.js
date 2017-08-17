import React from 'react'
import { storiesOf } from '@storybook/react'
import { DateTime, Col } from 'components'

storiesOf('Datetime', module).add('Default', () =>
  <Col>
    <DateTime value={'2017-06-21T14:00:00+00:00'} />
  </Col>,
)
