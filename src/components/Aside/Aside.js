import React, { useState } from "react";
import {
    AsideContainer,
    Bar,
    HamburgerButton,
    Li,
    Logo,
    Nav,
    StyledLink,
    MainAside,
    Ul,
} from "./styled";

const AsideMenu = ({ setPage }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <MainAside>
            {/* <HamburgerButton onClick={toggleMenu}>
                <Bar menuOpen={menuOpen} />
                <Bar menuOpen={menuOpen} />
                <Bar menuOpen={menuOpen} />
            </HamburgerButton> */}
            <AsideContainer menuOpen={menuOpen}>
                <Logo>
                    Cadastro de <br /> Pedido Cirúrgico
                </Logo>
                <Nav>
                    <Ul>
                        <Li>
                            <StyledLink onClick={() => setPage(1)}>
                                Sala
                            </StyledLink>
                        </Li>
                        <Li>
                            <StyledLink onClick={() => setPage(2)}>
                                Procedimento
                            </StyledLink>
                        </Li>
                        <Li>
                            <StyledLink onClick={() => setPage(3)}>
                                Hospital
                            </StyledLink>
                        </Li>
                        <Li>
                            <StyledLink onClick={() => setPage(4)}>
                                Pedido Cirúrgico
                            </StyledLink>
                        </Li>
                    </Ul>
                </Nav>
            </AsideContainer>
        </MainAside>
    );
};

export default AsideMenu;
