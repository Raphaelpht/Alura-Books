import { useState } from "react"
import Input from "../Input"
import * as S from "./styled"
import { books } from "../../data/ListBooks"

function Search() {

    const [booksFound, setBooksFound] = useState([])

    function SearchBooks(value) {
        let groupBooks = []

        if (value && value !== " ") {
            const resultSearch = books.filter(book => book.name.toUpperCase().includes(value.toUpperCase()))
            for (let i = 0; i < resultSearch.length; i += 5) {
                groupBooks.push(resultSearch.slice(i, i + 5));
            }
            setBooksFound(groupBooks)
        } else {
            setBooksFound([])
        }
    }

    return (
        <S.SearchContainer>
            <S.Title>Já sabe por onde começar?</S.Title>
            <S.SubTitle>Encontre seu livro em nossa estante.</S.SubTitle>
            <Input placeholder="Escreva sua próxima leitura" onBlur={event => SearchBooks(event.target.value)} />
            {booksFound.map((group, key) => {
                return (
                    <S.Estante key={key}>
                        {group.map(book => {
                            return (
                                <S.Result key={book.name} href={book.path} target="_blank" rel="noopener noreferrer">
                                    <S.ContainerImage>
                                        <S.BookImage src={book.image} alt="" title={book.name} />
                                    </S.ContainerImage>
                                    <S.BookText>{book.name.length > 60 ? book.name.substr(0, 60) + '...' : book.name}</S.BookText>
                                </S.Result>
                            )
                        })}
                    </S.Estante>
                )
            })}
        </S.SearchContainer>
    )
}

export default Search