import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const Link = styled.a`
    color: ${({ theme }) => theme.text_primary};
    text-decoration: none;
    &:hover {
        color: ${({ theme }) => theme.text_secondary};
    }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities! You can contact me via email at <Link>{Bio.email}</Link> or connect with me on <Link href={Bio.linkedin}>LinkedIn</Link>. I look forward to hearing from you!</Desc>
      </Wrapper>
    </Container>
  )
}

export default Contact