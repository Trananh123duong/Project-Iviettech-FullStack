import styled from 'styled-components'

export const ComicCard = styled.div`
  padding: 10px;
  text-align: center;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 4px;
  }

  .title {
    font-weight: bold;
    margin-top: 8px;
  }

  .chapter-time {
    font-size: 0.9rem;
    color: gray;
  }
`