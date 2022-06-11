import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
`

export const CategoriesMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2779f5;
  width: 100px;
  border: 2px white;
  justify-content: center;
  gap: 5vw;
`

export const CategoryButton = styled.button<{ isActiveBrand: boolean }>`
  cursor: pointer;
  background: none;
  border: none;
  padding: 5px 5px;
  border: ${(props) => props.isActiveBrand && '2px solid white'};
  color: ${(props) => (props.isActiveBrand ? '#fff' : 'black')};
  font-size: 1.4rem;
`

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5vw;
  padding: 3vw;
`
