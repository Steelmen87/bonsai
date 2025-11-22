import styled from "styled-components";

type PropsType = {
    top?: string
    right?: string
    color?: string
}
export const StyledApp = styled.div<PropsType>`
    background-color: ${props => props.color || "#F2FAFF"};
    border-radius: 94px;
    height: 700px;
    width: 700px;
    transform: rotate(-25deg);
    z-index: -1;
    position: absolute;
    content: "";
    top: ${props => props.top || "-300px"};
    right: ${props => props.right || "0"};
`