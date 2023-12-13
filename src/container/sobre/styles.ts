import styled from 'styled-components'
export const ContainerSobre = styled.div`
  h3 {
    padding-bottom: 16px;

    @media screen and (max-width: 768px) {
      padding-top: 32px;
    }
  }

  img {
    height: 200px;
    margin: 40px auto;

    @media screen and (max-width: 768px) {
      max-width: 100%;
      margin-bottom: 0;
    }
  }
`

export const Paragrafo = styled.p`
  color: ${(props) => props.theme.corPrincipal};
`
