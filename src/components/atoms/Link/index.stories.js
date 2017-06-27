import React from 'react'
import { storiesOf } from '@storybook/react'
import { Link } from 'components'

storiesOf('Link', module)
  .add('Default', () => (
    <Link>Link Sample</Link>
  ))
  .add('Highlight', () => (
    <Link highlight>Link Sample</Link>
  ))
  .add('Button', () => (
    <Link button>Link Sample</Link>
  ))
  .add('Large button', () => (
    <Link button large>Link Sample</Link>
  ))
  .add('Button with URL', () => (
    <Link to={'http://www.google.fr'} button>Link Sample</Link>
  ))
