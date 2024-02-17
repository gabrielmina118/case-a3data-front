import styled from "styled-components";

export const MainAside = styled.div`
    width: 20%;
`;

export const AsideContainer = styled.aside`
    top: 0;
    height: 100%;
    background-color: #001863;
    transition: left 0.3s ease;
    padding: 10px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const Logo = styled.p`
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
`;

export const Nav = styled.nav`
    margin-top: 10px;
`;

export const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const Li = styled.li`
    margin-bottom: 10px;
    color: #fff;
`;

export const StyledLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    padding: 10px;
    display: block;
    transition: background-color 0.3s;
    &:hover {
        color: #fff;
        background-color: #ccc;
    }
`;

export const HamburgerButton = styled.button`
    display: none;

    @media (max-width: 768px) {
        display: block;
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 2;
        background: none;
        border: none;
        cursor: pointer;
        outline: none;
    }
`;

export const Bar = styled.div`
    width: 30px;
    height: 5px;
    background-color: #fff;
    margin: 5px 0;
    transition: transform 0.3s, opacity 0.3s;

    &:first-child {
        transform: ${(props) =>
            props.menuOpen ? "rotate(-45deg) translate(-9px, 6px)" : "none"};
    }

    &:nth-child(2) {
        opacity: ${(props) => (props.menuOpen ? "0" : "1")};
    }

    &:last-child {
        transform: ${(props) =>
            props.menuOpen ? "rotate(45deg) translate(-8px, -8px)" : "none"};
    }
`;
