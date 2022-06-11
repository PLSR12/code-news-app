import { useHistory, Link } from 'react-router-dom'

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'

import paths from '../../config/paths'

import {
  Container,
  ContainerLeft,
  ContainerRight,
  PageLink,
  Line,
} from './styles'

export function Header() {
  const {
    push,
    location: { pathname },
  } = useHistory()

  return (
    <Container>
      <ContainerLeft>
        <Link to="/">
          <LibraryBooksIcon style={{ color: 'white'}} />
        </Link>
      </ContainerLeft>
    </Container>
  )
}
