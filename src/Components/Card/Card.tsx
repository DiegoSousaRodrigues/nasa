import { A } from '@solidjs/router'
import Nasa from '../icons/nasa'

import { CardProps } from './Card.types'
import {
  Button,
  Footer,
  Title,
  Wrapper,
  WrapperContent,
  WrapperTitle,
} from './Card.styles'

export function Card({ title, description, buttonLink }: CardProps) {
  return (
    <div class={Wrapper()}>
      <div class={WrapperTitle()}>
        <Nasa size="72px" />
        <h1 class={Title()}>{title}</h1>
      </div>
      <div class={WrapperContent()}>
        <p>{description}</p>
      </div>
      <div class={Footer()}>
        <A href={buttonLink} class={Button()}>
          Acessar API
        </A>
      </div>
    </div>
  )
}
