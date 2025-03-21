import { For } from 'solid-js'
import Card from '../Card'
import { CardProps } from '../Card/Card.types'
import Container from '../Container'

export function HomeScreen() {
  const data: CardProps[] = [
    {
      title: 'APOD',
      description: 'Astronomy Picture of the Day',
      buttonLink: '/api',
    },
    {
      title: 'Asteroids - NeoWs',
      description: 'Near Earth Object Web Service',
      buttonLink: '/api',
    },
  ]

  return (
    <Container>
      <For each={data}>{(item) => <Card {...item} />}</For>
    </Container>
  )
}
