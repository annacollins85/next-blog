import styled from 'styled-components'

const NotFoundContainer = styled.div`
  margin-top: 184px;
  padding: 92px;
`

function NotFound () {
  return (
    <NotFoundContainer>
      <h2>Page not found</h2>
      <p>It seems that the page you are looking for doesn&apos;t exist.</p>
    </NotFoundContainer>
  )
}

export default NotFound
