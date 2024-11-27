import { Title } from "../News/styled"
import * as S from "./styled"

function Card({title, subtitle, description, image}) {
    return (
        <S.CardContainer>
            <div>
                <Title $colorFont="#EB9B00" $fontSize="16px" $alignText="left">{title}</Title>
                <S.Subtitle>{subtitle}</S.Subtitle>
                <S.Description>{description}</S.Description>
            </div>
            <div>
                <S.ImageBook alt="" src={image}/>
                <S.Button>Saiba mais</S.Button>
            </div>
        </S.CardContainer>
    )
}

export default Card