import { Botao, Container, SideBarContainer } from "./styles"
import { TitlePrimary } from "../../components/titulo/styles"
import { Avatar } from "../avatar/Avatar"
export const Sidebar = () => {
  return (
    <>
      <SideBarContainer>
        <Container>
          <Avatar />
          <TitlePrimary fontSize={20}>paulobeltramin</TitlePrimary>
          <TitlePrimary fontSize={14}>@Paulobeltramin</TitlePrimary>
          <p>
          "Dev Front-End"
          </p>

          <Botao>Mudar tema</Botao>
        </Container>
      </SideBarContainer>
    </>
  )
}