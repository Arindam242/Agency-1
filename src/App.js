import styled from 'styled-components'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'

function App() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <About />
    </Container>
  )
}

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
`

export default App
