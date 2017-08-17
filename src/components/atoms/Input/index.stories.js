import React from 'react'
import { storiesOf } from '@storybook/react'
import { Input, Col } from 'components'

storiesOf('Input', module)
  .add('Default', () =>
    <Col>
      <Input />
    </Col>,
  )
  .add('Textarea', () =>
    <Col>
      <Input type={'textarea'} />
    </Col>,
  )
  .add('Select', () =>
    <Col>
      <Input type={'select'} />
    </Col>,
  )
  .add('Radio', () =>
    <Col>
      <Input type={'radio'} />
    </Col>,
  )
  .add('Checkbox', () =>
    <Col>
      <Input type={'checkbox'} />
    </Col>,
  )
  .add('With height', () =>
    <Col>
      <Input height={100} />
    </Col>,
  )
