import { useState, useEffect } from 'react'
import api from '../../services/api'
import { CardNoticies } from '../../Components'

import {
  Container,
  CategoriesMenu,
  CategoryButton,
  NewsContainer,
} from './styles'

export function Home({ state }: any) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }
  const [categories, setCategories] = useState([])
  const [activeCategories, setActiveCategorie] = useState<any>(categoryId)
  const [news, setNews] = useState<any>([])
  const [filteredNews, setFilteredNews] = useState<any>([])

  useEffect(() => {
    async function loadCategory() {
      const { data: CategoryNews }: any = await api.get('category')

      const newCategory: any = [{ id: 0, name: 'Todas' }, ...CategoryNews]

      setCategories(newCategory)
    }

    async function loadNews() {
      const { data: allNews }: any = await api.get('notices')

      console.log(allNews)

      const newNews = allNews.map((notice: any) => {
        return {
          ...notice,
        }
      })

      setNews(newNews)
    }

    loadNews()
    loadCategory()
  }, [])

  useEffect(() => {
    if (activeCategories === 0) {
      setFilteredNews(news)
    } else {
      const newFilteredNews = news.filter(
        (notice: { category_id: any }) =>
          notice.category_id === activeCategories
      )

      setFilteredNews(newFilteredNews)
    }
  }, [activeCategories, news])

  return (
    <>
      <CategoriesMenu>
        {categories &&
          categories.map((category: { id: any; name: string }) => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveBrand={activeCategories === category.id}
              onClick={() => {
                setActiveCategorie(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>
      <Container>
        <NewsContainer>
          {filteredNews &&
            filteredNews.map((notice: { id: number }) => (
              <CardNoticies key={notice.id} notice={notice} />
            ))}
        </NewsContainer>
      </Container>
    </>
  )
}
