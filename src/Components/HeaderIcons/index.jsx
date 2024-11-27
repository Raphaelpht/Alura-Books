import Perfil from '../../images/perfil.svg'
import Sacola from '../../images/sacola.svg'
import styled from 'styled-components'

const IconContainer = styled.ul`
    display: flex;
    align-items: center;
`

const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
`

const icons = [Perfil, Sacola]

function HeaderIcons() {
    return (
        <IconContainer>
            {icons.map( icon => (
                <Icon key={icon}><img src={icon} alt="icone" /></Icon>
            ))}
        </IconContainer>
    )
}

export default HeaderIcons