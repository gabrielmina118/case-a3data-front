import { Main } from "./styled";
import AsideMenu from "./components/Aside/Aside";
import { GlobalStyle } from "./constants/GlobalStyled";
import Room from "./components/Room/Room";

function App() {
    return (
        <>
            <GlobalStyle />
            <Main>
                <AsideMenu />
                <Room />
            </Main>
        </>
    );
}

export default App;
