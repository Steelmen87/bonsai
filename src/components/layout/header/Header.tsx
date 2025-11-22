import styled from "styled-components";
import logoImg from "../../../assets/image/logo.png";
import tab from "../../../assets/image/Frame.png";
import {StyledApp} from "../styledApp/StyledApp.tsx";

export const Header = () => {
    return (
        <StyledWrapper>
            <StyledApp />
            <StyleHeader>
                <Logo img={logoImg}/>
                <BlockMenuButton>
                    <Menu>
                        Product
                        <Tab tab={tab}/>
                    </Menu>
                    <ButtonBlock>
                        <ButtonStyled>Log In</ButtonStyled>
                        <ButtonStyled color={"#00B289"} colorText={"white"}>start free</ButtonStyled>
                    </ButtonBlock>
                </BlockMenuButton>
            </StyleHeader>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1440px;
    width: 100%;
`
const StyleHeader = styled.header`
    display: flex;
    align-items: flex-end;
    height: 80px;
    max-width: 1180px;
    width: 100%;
`
type LogoProps = {
    img: any
}
const Logo = styled.image<LogoProps>`
    background-image: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
    width: 150px;
    height: 31px;
    margin-right: 518px;
    margin-bottom: 11px;
    border: none;
`
const BlockMenuButton = styled.div`

    display: flex;
    align-items: center;

    padding: 7px 0 7px 150px;
`
const Menu = styled.div`
    position: relative;

`
type  TabProps = {
    tab: any
}
const Tab = styled.image<TabProps>`
    position: absolute;
    content: "";
    top: 12px;
    right: -12px;
    background-image: url(${props => props.tab});
    height: 7px;
    width: 7px;
`
type ButtonStyledProps = {
    color?: string
    colorText?: string
}

const ButtonStyled = styled.button<ButtonStyledProps>`
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.6px;
    text-align: center;
    text-transform: uppercase;
    color: ${props => props.colorText || "#00B289"};

    border: 1px solid rgba(0, 178, 137, 1);
    border-radius: 4px;
    background-color: ${props => props.color};

`
const ButtonBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 38px;

    ${ButtonStyled} + ${ButtonStyled} {
        margin-left: 15px;
    }
`
