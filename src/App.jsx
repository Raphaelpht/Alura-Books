import Header from './Components/Header';
import styled from 'styled-components';
import Search from './Components/Search';
import News from './Components/News';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #002F52;
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Search/>
      <News/>
    </AppContainer>
  )
}

export default App;