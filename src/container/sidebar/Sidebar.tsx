import { Botao, Container, SideBarContainer, Image } from './styles'
import { TitlePrimary } from '../../components/titulo/styles'
import { Avatar } from '../avatar/Avatar'
import { Paragrafo } from '../sobre/styles'
import { FaWhatsapp, FaGithub } from 'react-icons/fa'

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
          <Image
            href="https://api.whatsapp.com/send?phone=5543988173568"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </Image>
          <Image
            href="http://github.com/paulobeltramin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Image>
          <TitlePrimary fontSize={14}>@Paulobeltramin</TitlePrimary>
          <Paragrafo>Dev Front-End</Paragrafo>

          <Botao onClick={props.themeReplace}>Mudar tema</Botao>
        </Container>
      </SideBarContainer>
    </>
  )
}
