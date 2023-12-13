import { TitlePrimary } from '../../components/titulo/styles'
import { Paragrafo } from '../sobre/styles'
import { ButtonLink, Line, ProjectsStyles } from './styles'

export const Projects = () => {
  return (
    <>
      <TitlePrimary fontSize={24}>Projetos</TitlePrimary>

      <ul>
        <ProjectsStyles>
          <Line>
            <li>
              <TitlePrimary>Nome do projeto</TitlePrimary>
              <Paragrafo>descrição do projeto:</Paragrafo>

              <ButtonLink href="">Ver no Git</ButtonLink>
            </li>
          </Line>

          <Line>
            <li>
              <TitlePrimary>Nome do projeto</TitlePrimary>
              <Paragrafo>descrição do projeto:</Paragrafo>

              <ButtonLink href="">Ver no Git</ButtonLink>
            </li>
          </Line>

          <Line>
            <li>
              <TitlePrimary>Nome do projeto</TitlePrimary>
              <Paragrafo>descrição do projeto:</Paragrafo>

              <ButtonLink href="">Ver no Git</ButtonLink>
            </li>
          </Line>

          <Line>
            <li>
              <TitlePrimary>Nome do projeto</TitlePrimary>
              <Paragrafo>descrição do projeto:</Paragrafo>

              <ButtonLink href="">Ver no Git</ButtonLink>
            </li>
          </Line>

          <Line>
            <li>
              <TitlePrimary>Nome do projeto</TitlePrimary>
              <Paragrafo>descrição do projeto:</Paragrafo>

              <ButtonLink href="">Ver no Git</ButtonLink>
            </li>
          </Line>
        </ProjectsStyles>
      </ul>
    </>
  )
}
