// import Head from 'next/head'
// import Header from '@components/Header'
// import Footer from '@components/Footer'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    height: 100vh;
    /* background-color: #880c; */
    color: red;
    align-items: center;
    justify-content: center;
    font-family: 'Luckiest Guy';
    font-size: 40px;
`

export default function Home() {
  return (
    <Container>
        Hello Roboticists!
    </Container>
  )
}
