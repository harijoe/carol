import React from 'react'
import { storiesOf } from '@storybook/react'
import Row from 'components/Row'

storiesOf('Row', module).add('Default', () => <Row>Section</Row>).add('Reverse', () =>
  <Row column reversed>
    Section
  </Row>,
)
