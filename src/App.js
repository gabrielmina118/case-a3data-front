import { ContainerPage, Main } from "./styled";
import AsideMenu from "./components/Aside/Aside";
import { GlobalStyle } from "./constants/GlobalStyled";
import Room from "./components/Room/Room";
import Hospital from "./components/Hospital/Hospital";
import Procedure from "./components/Procedure/Procedure";
import SurgicalOrder from "./components/SurgicalOrder/SurgicalOrder";
import { useState } from "react";

function App() {
    const [page, setPage] = useState(1);

    const switchElement = () => {
        switch (page) {
            case 1:
                return <Room />;
            case 2:
                return <Hospital />;
            case 3:
                return <Procedure />;
            case 4:
                return <SurgicalOrder />;
            default:
                return null;
        }
    };

    return (
        <>
            <GlobalStyle />
            <Main>
                <AsideMenu setPage={setPage} />
                <ContainerPage>{switchElement()}</ContainerPage>
            </Main>
        </>
    );
}

export default App;
