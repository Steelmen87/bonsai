import styled from "styled-components";
import {StyledApp} from "../styledApp/StyledApp.tsx";
import frame from "./../../../assets/image/Shape.png"
import contacts from "./../../../assets/image/contacts.png"
import folders from "./../../../assets/image/folders.png"
import clock from "./../../../assets/image/clock.png"
import usd from "./../../../assets/image/$.png"
import tasks from "./../../../assets/image/tasks.png"
import procents from "./../../../assets/image/procents.png"
import form from "./../../../assets/image/forms.png"
import icon from "./../../../assets/image/iconsone.png"
import row from "./../../../assets/image/Row.png"
import invoiceImg from "./../../../assets/image/invoiceImage.png"
import {Item} from "./itemMenu/ItemMenu.tsx";

const ItemsObject = [
    {
        frame: frame,
        description: "Proposals",
        icon: icon
    },
    {
        frame: contacts,
        description: "Contracts",
        icon: ""
    },
    {
        frame: folders,
        description: "Client CRM",
        icon: ""
    },
    {
        frame: clock,
        description: "Time Tracking",
        icon: ""
    },
    {
        frame: usd,
        description: "Invoices",
        icon: icon
    },
    {
        frame: tasks,
        description: "Task Tracking",
        icon: ""
    },
    {
        frame: procents,
        description: "Accounting & Taxes",
        icon: ""
    },
    {
        frame: form,
        description: "Forms",
        icon: ""
    }
]
export const WinMoreWork = () => {
    return (
        <StyledWinMoreWork>
            <StyledApp top={"300px"} right={"-540px"} color={"#FFF5E8"}/>
            <StyledContainer>
                <StyledBlockNav>
                    {ItemsObject.map((el, index) => <Item
                        key={index}
                        frame={el.frame}
                        description={el.description}
                        icon={el.icon}
                    />)}
                </StyledBlockNav>
                <BlockWWW>
                    <Title>Win More Work</Title>
                    <Description>
                        With just a few clicks, you can craft
                        structured proposals with clear
                        estimates to close your deals faster.
                    </Description>
                    <Link>
                        Explore invoices
                        <Icon img={row}/>
                    </Link>
                    <Image img={invoiceImg}/>
                </BlockWWW>
            </StyledContainer>
        </StyledWinMoreWork>
    );
};
type ImageProps = {
    img: any
}
const Image =styled.image<ImageProps>`
    background-image: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    width: 411px;
    height: 306px;
    object-fit: cover;
    align-self: flex-end;
    
    
`
type IconProps = {
    img: any
}
const Icon =styled.image<IconProps>`
    background-image: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    width: 24px;
    height: 25px;
    object-fit: cover;
    right: -30px;
    top: -3px;
    position: absolute;
`
const Link = styled.a`
    width: 160px;
    position: relative;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: rgba(1, 178, 137, 1);
    margin-bottom: 28px;

`
const Description = styled.h2`
    width: 356px;
    font-weight: 400;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: 0;
    padding-top: 15px;
    padding-bottom: 85px;
    color: rgba(76, 77, 95, 0.58);

`
const Title = styled.h2`
    font-weight: 400;
    font-size: 44px;
    line-height: 44px;
    letter-spacing: 0;
    color: rgba(76, 77, 95, 1);

`
const BlockWWW = styled.div`
    margin-left: 90px;
    //border: 1px solid;
    display: flex;
    flex-direction: column;

    width: 100%;
`

const StyledBlockNav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 372px;
    height: 640px;
    //border: 1px solid;
`
const StyledContainer = styled.div`
    display: flex;
    width: 1065px;
    height: 640px;
    //border: 1px solid;
`
const StyledWinMoreWork = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 893px;
    width: 1440px;
    //border: 1px solid;
`
