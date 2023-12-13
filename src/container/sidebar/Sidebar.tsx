import { Botao, Container, SideBarContainer } from './styles'
import { TitlePrimary } from '../../components/titulo/styles'
import { Avatar } from '../avatar/Avatar'
import { Paragrafo } from '../sobre/styles'

type replacetheme = {
  themeReplace: () => void
}

export const Sidebar = (props: replacetheme) => {
  return (
    <>
      <SideBarContainer>
        <Container>
          <Avatar />
          <TitlePrimary fontSize={20}>paulobeltramin</TitlePrimary>
          <TitlePrimary fontSize={14}>@Paulobeltramin</TitlePrimary>
          <Paragrafo>Dev Front-End</Paragrafo>

          <Botao onClick={props.themeReplace}>Mudar tema</Botao>
        </Container>
      </SideBarContainer>
    </>
  )
}
