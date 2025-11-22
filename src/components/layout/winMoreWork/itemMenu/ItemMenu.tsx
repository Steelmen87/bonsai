import styled from "styled-components";
type PropsType = {
    frame:any
    description:string
    icon:any
}
export const Item = ({icon,description,frame}:PropsType) => {
    return (
        <ItemMenu>
            <Frame img={frame}/>
            <Description>
                {description}
            </Description>
            <Icon img={icon}/>
        </ItemMenu>
    );
};

const ItemMenu = styled.div`
    display: flex;
    align-items: center;
    width: 343px;
    height: 78px;
    //border: 1px solid;
    position: relative;
    border-bottom: 1px solid #E5E9EF;
    &:not(:first-child){
        border-top: 1px solid #E5E9EF;
    }
    &:last-child{
        border-bottom:none;
    }
    
    margin-bottom: 2px;
    border-radius: 2px;
    
    &:hover {
        background: white
    }
`

type ImgProps = {
    img: any
}
const Frame = styled.image<ImgProps>`
    background-image: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    width: 24px;
    height: 25px;
    object-fit: cover;
    margin-left: 20px;
    //color: #01B289;
`
type IconProps = {
    img: any
}
const Icon = styled.image<IconProps>`
    background-image: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    width: 8px;
    height: 13px;
    object-fit: cover;
    position: absolute;
    right: 32px;
`
const Description = styled.h2`
    font-weight: 400;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: 0;
    color: #4C525A;
    
    margin-left: 26px;
`