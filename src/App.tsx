import './App.css'
import {Header} from "./components/layout/header/Header.tsx";
import styled from "styled-components";
import {Main} from "./components/layout/main/Main.tsx";
import {MakeMore} from "./components/layout/makeMore/MakeMore.tsx";

function App() {
    return (
        <StyleApp>
            <Header/>
            <Main/>
            <MakeMore/>
        </StyleApp>
    )
}

const StyleApp = styled.div`

`
export default App
