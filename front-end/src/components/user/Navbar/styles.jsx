import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MainNav = styled.div`
  width: 100%;
  background-color: rgb(228,228,228);

  nav {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
  }
`

export const MainList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;

  & > li {
    font-size: 1.6rem;
    line-height: 1.6rem;
    border-left: 1px solid #ccc;
    display: block;
    height: 100%;
    position: relative;
  }
`

export const ItemLink = styled(Link)`
  color: black;
  padding: 10px 20px;
  display: block;

  &:hover {
    color: violet;
    background-color: rgb(240, 240, 240);
  }
`

export const CategoryList = styled.ul`
  /* min-width: 600px;
  z-index: 1000;
  background-color: white;
  position: absolute;
  top: 100%;
  border: 2px solid #ccc;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: none;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -1px;
    right: 0;
    width: 100%;
    height: 24px;
    background-color: transparent;
  } */
`

export const ItemCategory = styled.div`
  &:hover ${CategoryList} {
    display: block;
  }
`

export const CategoryItem = styled.li`
  font-size: 1.8rem;
  padding: 10px 20px;

  &:first-child {
    margin-top: 10px;
  }

  &:last-child {
    margin-bottom: 10px;
  }
`

export const ItemCategoryLink = styled(Link)`
  &:hover {
    color: violet;
  }
`

export const RankList = styled.ul`
  display: none;
  min-width: 340px;
  z-index: 1000;
  background-color: white;
  position: absolute;
  top: 100%;
  border: 2px solid #ccc;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const ItemRank = styled.li`
  &:hover {
    background-color: white;
    color: violet;
  }

  &:hover ${RankList} {
    display: block;
  }
`