import Card from "../Card";
import { books } from "../../data/LastBooks"
import * as S from "./styled"
import imageBook from "../../images/livro2.png"

function News() {

    const groupBooks = []

    for (let i = 0; i < books.length; i += 5) {
        groupBooks.push(books.slice(i, i + 5));
    }

    return (
        <S.NewsContainer>
            <S.Title $colorFont="#EB9B00" $fontSize="36px" $alignText="center">
                Últimos Lançamentos
            </S.Title>
            {groupBooks.map((group, key) => (
                <S.NewsBooksContainer key={key}>
                    {group.map(book => (
                        <S.ResultImage key={book.name} href={book.path} target="_blank" rel="noopener noreferrer">
                            <S.BookImage alt="" src={book.image} title={book.name} />
                        </S.ResultImage>
                    ))}
                </S.NewsBooksContainer>
            ))}
            <Card
                title={"Talvez você se interesse por"}
                subtitle={"Angular 11"}
                description={"Construindo uma aplicação com a plataforma Google"}
                image={imageBook}
            />
        </S.NewsContainer>
    )
}

export default News