import React, { useState } from "react";
import {
    AsideContainer,
    HamburgerButton,
    Li,
    Logo,
    Nav,
    StyledLink,
    MainAside,
    Ul,
    Blackout,
} from "./styled";
import munuIcon from "../../assets/icon-menu.svg";

const AsideMenu = ({ setPage }) => {
    const [open, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!open);
    };

    return (
        <MainAside open={open}>
            {!open && (
                <HamburgerButton onClick={toggleMenu}>
                    <img src={munuIcon} alt="Icone de menu" />
                </HamburgerButton>
            )}
            <Blackout onClick={toggleMenu} open={open} />
            <AsideContainer open={open}>
                <Logo>Cadastro de Pedido Cirúrgico</Logo>
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
