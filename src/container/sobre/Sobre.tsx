import { ContainerSobre, Paragrafo } from './styles'
import { TitlePrimary } from '../../components/titulo/styles'

export const Sobre = () => {
  return (
    <>
      <ContainerSobre>
        <TitlePrimary fontSize={24}>Sobre mim </TitlePrimary>

        <div>
          <Paragrafo>
            Olá meu nome é paulo , sou um amante da tecnologia e em busca
            constantes por novos conhecimentos e experiências
          </Paragrafo>

          <div>
            <img
              src="https://github-readme-stats.vercel.app/api?username=paulobeltramin&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
              alt="tecnologias"
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=paulobeltramin&layout=compact&langs_count=7&theme=dracula"
              alt="tecnologias"
            />
          </div>
        </div>
      </ContainerSobre>
    </>
  )
}
