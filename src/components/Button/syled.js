import styled from "styled-components";
const colors = {
    primary: "var(--primary-color)",
    secondary: "var(--secondary-color)",
    white: "#fff",
    black: "#000",
    danger: "var(--danger-color)",
    gray: "#ccc",
};
const sizes = {
    small: {
        padding: "0.35rem 1rem",
        borderRadius: "16px",
        fontSize: "14px",
        imgSize: "16px",
    },
    medium: {
        padding: "0.5rem 1.5rem",
        borderRadius: "20px",
        fontSize: "20px",
        imgSize: "24px",
    },
    large: {
        padding: "1rem 2rem",
        borderRadius: "32px",
        fontSize: "24px",
        imgSize: "32px",
    },
};
export const ButtonStyled = styled.button`
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: ${(props) => sizes[props.size]?.padding || sizes.medium.padding};
    border-radius: ${(props) =>
        sizes[props.size]?.borderRadius || sizes.medium.borderRadius};
    background-color: ${(props) => colors[props.color] || colors.primary};
    color: ${(props) => colors[props.textColor] || colors.black};
    font-size: ${(props) =>
        sizes[props.size]?.fontSize || sizes.medium.fontSize};
    outline: none;
    border: none;
    img {
        width: ${(props) => sizes[props.size]?.imgSize || sizes.medium.imgSize};
    }
    &:hover {
        filter: brightness(0.8);
    }
    @media (max-width: 768px) {
        padding: ${sizes.small.padding};
        font-size: ${(props) =>
            props.size === "small" ? "0" : sizes.small.fontSize};
        gap: ${(props) => (props.size === "small" ? "0" : "0.5rem")};
        img {
            width: ${sizes.small.imgSize};
        }
    }
`;
