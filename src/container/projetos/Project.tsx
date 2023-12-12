import { TitlePrimary } from "../../components/titulo/styles"
import { ProjectsStyles } from "./styles"


export const Projects = () => {
  return (
    <>
      <TitlePrimary>Projetos</TitlePrimary>

      <ul>
        <ProjectsStyles>

          <li>
            <TitlePrimary>Nome do projeto</TitlePrimary>
            <p>
              descrição do projeto:
            </p>
          </li>

          <li>
            <TitlePrimary>Nome do projeto</TitlePrimary>
            <p>
              descrição do projeto:
            </p>
          </li>

          <li>
            <TitlePrimary>Nome do projeto</TitlePrimary>
            <p>
              descrição do projeto:
            </p>
          </li>

        </ProjectsStyles>
      </ul>

    </>
  )
}