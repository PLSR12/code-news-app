import {
  ContainerCard,
  ContainerImage,
  ContainerText,
  NewsTitle,
  NewsPreview,
} from './styles'
import { useHistory } from 'react-router-dom'

export function CardNoticies({ notice }: any) {
  const { push } = useHistory()

  function redirect() {
    push('/')
  }

  return (
    <ContainerCard onClick={redirect}>
      <ContainerImage>
        <img src={notice.url} alt="imagem da notícia"></img>
      </ContainerImage>
      <ContainerText>
        <NewsTitle> {notice.title}</NewsTitle>
        <hr></hr>
        <NewsPreview>{notice.preview}</NewsPreview>
      </ContainerText>
    </ContainerCard>
  )
}
