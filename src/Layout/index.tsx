import { ReactNode } from 'react'

import {Header} from '../Components'

import { Body, Container, ContainerPage } from './styles'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <ContainerPage>
        <Header />
        <Body>{children}</Body>
      </ContainerPage>
    </Container>
  )
}
