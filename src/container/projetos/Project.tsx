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
              <TitlePrimary>Projeto VUE</TitlePrimary>
              <img src="../images/calculator.png" alt="image" />
              <Paragrafo>Calculadora criada em vueJS</Paragrafo>
              <a href="https://calc-vue-psi.vercel.app/">
                <ButtonLink>Ver Projeto</ButtonLink>
              </a>
            </li>
          </Line>

          <Line>
            <li>
              <TitlePrimary>Projeto de Evento fictício</TitlePrimary>
              <img src="../images/evento-ebac.png" alt="image" />
              <Paragrafo>
                Pagina de evento criada em html , sass ,javascript e o parcel.
              </Paragrafo>
              <a href="https://evento-ebac-orcin.vercel.app/">
                <ButtonLink>Ver Projeto</ButtonLink>
              </a>
            </li>
          </Line>

          <Line>
            <li>
              <TitlePrimary>Projeto luc-closet</TitlePrimary>
              <img src="../images/luc-closet.png" alt="image" />
              <Paragrafo>
                landingPage criada utilizando html, css, e bootstrap.
              </Paragrafo>
              <a href="https://closet-moda.vercel.app/">
                <ButtonLink>Ver Projeto</ButtonLink>
              </a>
            </li>
          </Line>
        </ProjectsStyles>
      </ul>
    </>
  )
}
