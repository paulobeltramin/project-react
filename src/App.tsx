import { Projects } from "./container/projetos/Project";
import { Sidebar } from "./container/sidebar/Sidebar";
import { Sobre } from "./container/sobre/Sobre";
import { Container, GlobalStyles } from "./globals-css/Globals";


function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        
        <div>
          <Sidebar />

        </div>

        <div>
          <Sobre />
          <Projects/>
        </div>

      </Container>
    </>
  );
}

export default App;
