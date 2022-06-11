import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  background-color: #2779f5;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
  width: 19vw;
  min-height:100vh;  
  margin: 0 0 ;

  hr {
    margin: 50px 15px;
  }
  button {
    background-color: black;
    padding: 40px;
    margin-top:10px;
    outline: none;
    border: none;
    cursor: pointer;
    width: 30vh;
    height:20vh;
  }

  img {
    max-width: 22vh;
  }
`
export const ItemContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background: ${props => props => (props.isActive ? '#646464' : '')};
  border-radius: 2px;
  margin: 8px;
  padding-left: 20px;
  .icon {    

    color: #ffff;
  }
  .icon-logout {
    color: #ffffff;
  }
`

export const ListLink = styled(Link)`
  font-weight: 400;
  font-size: 17px;
  line-height: 19px;
  color: #ffffff;
  text-decoration: none;
  padding-left: 15px;
`
