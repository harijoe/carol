import React from 'react'
import { storiesOf } from '@storybook/react'
import { BorderBox } from 'components'

storiesOf('BorderBox', module)
  .add('Default', () => <BorderBox>Sample Text</BorderBox>)
  .add('Grey', () => <BorderBox grey>Sample Text</BorderBox>)
  .add('Primary', () => <BorderBox primary>Sample Text</BorderBox>)
  .add('Dark', () => <BorderBox dark>Sample Text</BorderBox>)
  .add('MediumBorder', () => <BorderBox mediumBorder>Sample Text</BorderBox>)
  .add('BigBorder', () => <BorderBox bigBorder>Sample Text</BorderBox>)
  .add('With title', () => <BorderBox title={'Sample Title'}>Sample Text</BorderBox>)
