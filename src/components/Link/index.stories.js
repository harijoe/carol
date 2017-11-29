import React from 'react'
import { storiesOf } from '@storybook/react'
import Link from 'components/Link'

storiesOf('Link', module)
  .add('Default', () => <Link>Link Sample</Link>)
  .add('Highlight', () => <Link highlight>Link Sample</Link>)
  .add('Button', () => <Link button>Link Sample</Link>)
  .add('Large button', () =>
    <Link button large>
      Link Sample
    </Link>,
  )
  .add('Button with URL', () =>
    <Link to={'http://www.google.fr'} button>
      Link Sample
    </Link>,
  )

  .add('Button with mail link', () =>
    <Link to={'mailto:john.smith@company.com'} button>
      Mail sample
    </Link>,
  )

  .add('Button with tel link', () =>
    <Link to={'tel:0641696969'} button>
      Tel sample
    </Link>,
  )

