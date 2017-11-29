import React from 'react'
import { storiesOf } from '@storybook/react'
import NotificationBox from 'components/NotificationBox'

storiesOf('NotificationBox', module)
  .add('Default', () => <NotificationBox>Notification message</NotificationBox>)
  .add('Grey', () => <NotificationBox grey>Notification message</NotificationBox>)
  .add('Primary', () => <NotificationBox primary>Notification message</NotificationBox>)
  .add('Dark', () => <NotificationBox dark>Notification message</NotificationBox>)
  .add('Success', () => <NotificationBox success>Notification message</NotificationBox>)
  .add('Alert', () => <NotificationBox success>Notification message</NotificationBox>)
  .add('With Title', () =>
    <NotificationBox text={'Notification Message Title'} success>
      Notification message
    </NotificationBox>,
  )
