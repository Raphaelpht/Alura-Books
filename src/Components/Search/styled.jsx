import styled from "styled-components"

export const SearchContainer = styled.section`
    color: #FFF;
    text-align: center;
    background-color: #002F52;
    padding-top: 10px;
`

export const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

export const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

export const Estante = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    background-image: linear-gradient(90deg, #002F52 0%, #326589 50%, #002F52 100%);
`

export const Result = styled.a`
    cursor: pointer;
    border-radius: 5px;
    height: 210px;
    margin: 10px;
    text-decoration: none;
`

export const ContainerImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${ props => props.height || "140px"};
    padding: ${ props => props.padding || "10px 0"};

`;

export const BookImage = styled.img`
    max-width: 100px;
    max-height: 200px;
    border-radius: 10px;
`;

export const BookText = styled.p`
    width: 250px;
    color: ${ props => props.color || "white"};
    text-align: center;
`;