import styled from "styled-components";
import {BuildBlock} from "./buildBlock/BuildBlock.tsx";
import img1 from "../../../assets/image/Built1.png"
import img2 from "../../../assets/image/Global.png"
import {StyledApp} from "../styledApp/StyledApp.tsx";

const projectBuilds = [{
    img: img1,
    title: "Built for All Work Types",
    description: "We proudly back people with wide-ranging businesses—from design and marketing to development, writing, and photography."
}, {
    img: img2,
    title: "Built for Global Businesses",
    description: "Bonsai has international coverage across the United States, Canada, UK, Australia and more, with 180 currencies supported."
}]
export const TrustedBy = () => {
    return (
        <StyledTrustedBy>
            <StyledApp top={"300px"} right={"1140px"}/>
            <ContainerBlock>
                <Description>
                    <Title>Trusted by 250K+ freelancers and agencies.</Title>
                    <Text>Whether you’re just getting started or your business is booming, Bonsai has you
                        covered.</Text>
                </Description>
                <Works>
                    {projectBuilds.map((el, index) => <BuildBlock
                        key={index}
                        description={el.description}
                        title={el.title}
                        img={el.img}/>)}
                </Works>
            </ContainerBlock>
        </StyledTrustedBy>
    );
};

const Works = styled.div`
    display: flex;
    justify-content: space-evenly;

`
const Title = styled.h2`
    padding-top: 28px;
    padding-bottom: 48px;
    font-weight: 400;
    font-size: 46px;
    line-height: 44px;
    letter-spacing: 0;
    text-align: center;
    color: rgba(76, 77, 95, 1);

`
const Text = styled.p`
    font-weight: 400;
    font-size: 25px;
    line-height: 36px;
    letter-spacing: 0;
    text-align: center;
    width: 680px;
    color: rgba(76, 77, 95, 0.67);

`
const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

const StyledTrustedBy = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 893px;
    width: 1440px;
    //overflow-x: hidden;
`
const ContainerBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    //align-items: center;
    height: 532px;
    width: 1065px;
`