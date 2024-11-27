import styled from "styled-components"

export const NewsContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.colorFont || "#000"};
    font-size: ${props => props.fontSize || "18x"};
    text-align:  ${props => props.alignText || "center"};
    margin: 0;
`

export const ResultImage = styled.a`
    cursor: pointer;
    border-radius: 5px;
    text-decoration: none;
    margin-bottom: 20px;
`
export const BookImage = styled.img`
    max-width: auto;
    max-height: 200px;
    border-radius: 25px;
    padding: 0 20px;
`;

export const NewsBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
`