import './App.css'
import {Header} from "./components/layout/header/Header.tsx";
import styled from "styled-components";
import {Main} from "./components/layout/main/Main.tsx";

function App() {
    return (
        <StyleApp>
            <Header/>
            <Main/>
        </StyleApp>
    )
}

const StyleApp = styled.div`

`
export default App
