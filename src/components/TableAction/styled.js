import styled from "styled-components";

export const InfoScreen = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 2rem;
  max-width: 100%;
  flex-wrap: wrap;
  @media (max-width: 768px){
    font-size: 1.5rem;
    margin-bottom: 2rem;
    gap: 0.5rem;
  }
`;

export const MainButtonGroup = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: center;
  padding: 0 1rem;
`;


export const ButtonsForm = styled.div`
    display: flex;
    justify-content: end;
    padding: 1rem;
    align-items: center;
    width: 100%;
    gap: 1rem;
    flex-wrap: wrap;
`;
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  p{
    padding: 1rem;
    font-size: 1rem;
  }
`;
export const ContainerTabel = styled.div`
  max-width: 100%;
  width: auto;
  overflow-x: auto;
  min-width: 70%;
`