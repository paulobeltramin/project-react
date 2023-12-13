import styled from 'styled-components'

export const Container = styled.div`
  img {
    height: 150px;
    border-radius: 50%;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      height: 200px;
    }
  }

  @media screen and (max-width: 1023px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
  }
`

export const Botao = styled.button`
  margin-top: 24px;
  background-color: ${(props) => props.theme.corPrincipal};
  color: ${(props) => props.theme.corSecundaria};
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 6px;
`

export const SideBarContainer = styled.div`
  top: 80px;
  left: 0;
  position: sticky;
`
