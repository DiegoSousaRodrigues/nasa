import { children, JSX } from 'solid-js'
import { Wrapper } from './Container.styles'

export function Container(props: { children: JSX.Element }) {
  const c = children(() => props.children)
  return <div class={Wrapper()}>{c()}</div>
}
