import styled from "styled-components";

export const MainAside = styled.div`
    position: fixed;
    height: 100vh;
    @media (max-width: 768px) {
        position: fixed;
        width: ${(props) => (props.open ? "100vw" : "0")};
        height: 100vh;
        display: flex;
    }
`;

export const Blackout = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: ${(props) => (props.open ? "block" : "auto")};
        flex-grow: 1;
        background-color: #000000aa;
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;

export const AsideContainer = styled.aside`
    position: absolute;
    top: 0;
    height: 100%;
    background-color: #001863;
    padding-top: 40px;
    transition: transform 0.3s ease-out;
    position: relative;
    width: var(--menu-size-max);
    @media (max-width: 768px) {
        width: var(--menu-size-max);
        min-width: var(--menu-size-min);
        transform: translateX(${(props) => (props.open ? "0" : "-100%")});
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
    /* margin-top: 10px; */
`;

export const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const Li = styled.li`
    color: #fff;
`;

export const StyledLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    display: block;
    transition: background-color 0.3s;
    cursor: pointer;
    padding: 16px;
    &:hover {
        color: #fff;
        background-color: #ccccccaa;
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
        background-color: white;
        width: 42px;
        height: 42px;
        padding: 6px;
        border-radius: 50%;
        border: var(--primary-color) 1px solid;
        img {
            width: 100%;
        }
    }
`;
