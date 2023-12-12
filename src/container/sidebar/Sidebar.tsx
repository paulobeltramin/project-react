import { Container } from "./styles"
import { Title } from "../../components/titulo/Title"
export const Sidebar = () => {
  return (
    <>
      <div>
        <Container>
          <img src="https://github.com/paulobeltramin.png" alt="foto perfil" />
          <Title fontSize={20}>paulobeltramin</Title>
        </Container>
      </div>
    </>
  )
}