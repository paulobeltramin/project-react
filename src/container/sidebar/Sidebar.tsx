import { Container } from "./styles"
import { TitlePrimary } from "../../components/titulo/styles"
export const Sidebar = () => {
  return (
    <>
      <div>
        <Container>
          <img src="https://github.com/paulobeltramin.png" alt="foto perfil" />
          <TitlePrimary fontSize={20}>paulobeltramin</TitlePrimary>
        </Container>
      </div>
    </>
  )
}