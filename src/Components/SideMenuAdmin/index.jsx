import React from 'react'
import PropTypes from 'prop-types'

import { useHistory } from 'react-router-dom'

import { Container, ItemContainer, ListLink } from './styles'
import listLinks from './menu-list'

export function SideMenuAdmin({ path }) {
  const { push } = useHistory()

  return (
    <Container>
      <hr></hr>
      {listLinks.map((item) => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <ListLink to={item.link}>{item.label} </ListLink>
        </ItemContainer>
      ))}
      <hr></hr>
      <ItemContainer
        style={{ position: 'fixed', bottom: '30px' }}
      ></ItemContainer>
    </Container>
  )
}
