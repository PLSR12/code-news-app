import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import api from '../../services/api'
import formatDate from '../../utils/formatDate'

import {
  Container,
  ContentNotices,
  NewsTitle,
  NewsPreview,
  ContainerImage,
  DateNews,
  NewsContent,
} from './style'

export function Notice() {
  const [notice, setNotice] = useState<any>([])
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    async function loadProducts() {
      const splitedId = id.split(':')[1]
      console.log(splitedId)
      const data = await api.get(`/notice/${splitedId}`)

      console.log(data.data)

      setNotice(data.data)
    }
    loadProducts()
  }, [id])

  return (
    <>
      <Container>
        <ContentNotices>
          <NewsTitle> {notice.title}</NewsTitle>
          <NewsPreview>{notice.preview}</NewsPreview>
          <div className="lineDate">
            <DateNews> Criado em {formatDate(notice.updatedAt)}</DateNews>
          </div>
          <ContainerImage>
            <img src={notice.url} alt="imagem da notícia"></img>
          </ContainerImage>
          <NewsContent>{notice.content}</NewsContent>
        </ContentNotices>
      </Container>
    </>
  )
}
