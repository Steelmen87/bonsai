import styled from "styled-components";

export const Main = () => {
    return (
        <div>
            <BlockForm>
                <Title>Everything you need to
                    run your freelance business.</Title>
                <StyledText>
                    Bonsai’s all-in-one product suite with
                    smart automation lets you focus on your
                    passion, not your paperwork.
                </StyledText>
                <StyledInputButton>
                    <StyleInput placeholder={"Enter your email"}/>
                    <Button>START FREE</Button>
                </StyledInputButton>
            </BlockForm>
        </div>
    );
};
const Button = styled.button`
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0;
    padding: 25px;
    border: 2px solid #01B289;
    color: #FFFFFF;
    background-color: #01B289;
    
    border-radius: 0 4px 4px 0;
`
const StyleInput = styled.input`
    border: 2px solid #01B289;
    width: 338px;
    padding: 25px;
    border-radius: 4px 0 0 4px;
    &::placeholder {
        font-weight: 400;
        font-size: 18px;
        line-height: 100%;
        letter-spacing: 0;
    }

`
const StyledInputButton = styled.span`

    margin-top: 36px;
    display: flex;
`
const StyledText = styled.span`
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0;
    width: 470px;

`
const BlockForm = styled.form`
    width: 500px;
    height: 430px;
`
const Title = styled.h1`
    width: 396px;
    font-weight: 400;
    font-size: 45px;
    line-height: 62px;
    letter-spacing: 0;
    
    color: #4C4D5F;
    
    margin-bottom: 25px;

`