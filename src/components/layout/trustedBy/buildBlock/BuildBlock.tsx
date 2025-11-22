import styled from "styled-components";

type propsType = {
    img: any
    title: string
    description: string
}
export const BuildBlock = ({img, title, description}: propsType) => {
    return (
        <StyledBuild>
            <Build img={img}/>
            <BuiledTitle>{title}</BuiledTitle>
            <BuildText>{description}</BuildText>
        </StyledBuild>
    );
};
const StyledBuild = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    width: 300px;

`
const BuildText = styled.p`
    font-weight: 400;
    font-size: 17px;
    line-height: 25px;
    letter-spacing: 0;
    width: 311px;
    color: rgba(76, 77, 95, 0.61);

`
const BuiledTitle = styled.h2`
    font-weight: 700;
    font-size: 23px;
    line-height: 32px;
    letter-spacing: 0;
    color: rgba(76, 77, 95, 1);
    margin-bottom: 14px;
`
type BuildProps = {
    img: any
}
const Build = styled.image<BuildProps>`
    background-image: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    width: 84px;
    height: 84px;
    object-fit: cover;
    margin-left: 20px;
    //color: #01B289;
    margin-bottom: 30px;
    position: absolute;
    left: -20px;
    top: -100px;
`