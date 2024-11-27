import styled from 'styled-components'

const OptionsContainer = styled.ul`
    display: flex;
`

const Option = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const optionsText = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"]

function HeaderOptions() {
    return (
        <OptionsContainer>
            {optionsText.map( text => (
                <Option key={text}><p>{text}</p></Option>
            ))}
        </OptionsContainer>
    )
}

export default HeaderOptions