import styled from "styled-components"

const Input = styled.input `
    padding: 5px;
    width: 100%;
    margin-top: 20px;
    height: 30px;
    color: rgb(197, 197, 197);
    font-size: 1em;
    border: 0.5px solid rgb(197, 197, 197);
    border-radius: 3px;
`
const Error = styled.p `
    color: red;
    font-size: 12px;
`

const Wrapper = styled.div `
    margin-right: 10px;

`
const Field = ({error, ...rest}) => (
    <Wrapper>
        <Input {...rest} />
        {error && <Error>{error}</Error>}
  </Wrapper>
)

export default Field;