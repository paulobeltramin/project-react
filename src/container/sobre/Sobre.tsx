import { ContainerSobre } from "."
import { TitlePrimary } from "../../components/titulo/styles"

export const Sobre = () => {
    return (
        <>
            <ContainerSobre>

                <TitlePrimary>Sobre mim </TitlePrimary>

                <div>
                    <p>
                        Olá meu nome é paulo ,
                        sou um amante da tecnologia
                        e em busca constantes por novos
                        conhecimentos e experiências
                    </p>

                    <div>
                        <img src="https://github-readme-stats.vercel.app/api?username=paulobeltramin&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" alt="tecnologias" />
                        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=paulobeltramin&layout=compact&langs_count=7&theme=dracula" alt="tecnologias" />
                    </div>
                </div>
            </ContainerSobre>
        </>
    )
}