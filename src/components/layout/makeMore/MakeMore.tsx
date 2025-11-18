import styled from "styled-components";
import without from "../../../assets/image/1.png"
import withO  from "../../../assets/image/2.png"
export const MakeMore = () => {
    return (
        <StyledMakeMore>
            <BlockText>
                <Title>
                    Make more, manage less
                </Title>
                <Description>
                    Bonsai integrates and automates every step of
                    your business so it runs seamlessly -
                    from proposal to tax season.
                </Description>
            </BlockText>
            <BlockProcess>
                <Process>
                    <TitleProcess>Without Bonsai</TitleProcess>
                    <Image img={without}/>
                </Process>
                <Process>
                    <TitleProcess>Without Bonsai</TitleProcess>
                    <Image img={withO}/>
                </Process>
            </BlockProcess>
        </StyledMakeMore>
    );
};
const TitleProcess = styled.h2`
    font-weight: 700;
    font-size: 23px;
    line-height: 28px;
    text-align: center;
`
const Process = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 480px;
    height: 423px;
    //border: 1px solid;
`
type ImgProps = {
    img:any
}

const Image = styled.image<ImgProps>`
    background-image: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    width: 408px;
    height: 350px;
    object-fit: cover;
`
const BlockProcess = styled.h2`
    margin-top: 85px;
    display: flex;
    //border: 1px solid;

    ${Process} + ${Process} {
        margin-left: 100px;
    }


`
const Title = styled.h2`
    font-weight: 400;
    font-size: 43px;
    line-height: 44px;
    text-align: center;

    color: #4C4D5F;
    padding-top: 20px;
    padding-bottom: 35px;

`
const BlockText = styled.div`
    max-width: 575px;
    width: 100%;

`
const Description = styled.h2`
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    text-align: center;

    color: #4C4D5FA8;
    padding-top: 20px; 

`
const StyledMakeMore = styled.div`
    max-width: 1114px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    //border: 1px solid
`