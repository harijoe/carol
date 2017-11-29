import React from 'react'
import { storiesOf } from '@storybook/react'
import Paragraph from 'components/Paragraph'

storiesOf('Paragraph', module).add('Default', () =>
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus sit amet nisl sed aliquet. Curabitur dui justo, rhoncus id
    venenatis nec, viverra eu ligula. Sed auctor ac neque et laoreet. Duis et hendrerit lorem. Nam aliquam arcu quam, et rutrum turpis
    tincidunt eget. Maecenas a nunc et ligula pharetra hendrerit. Pellentesque et diam sit amet nisl mattis mattis vitae at neque.
  </Paragraph>,
)
