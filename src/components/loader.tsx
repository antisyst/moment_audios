import styled from 'styled-components';

const LoaderInt = styled.div `
    width: 30px;
    height: 30px;
    border: 5px solid var(--color-white);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;   
`
const Loader = () => {
  return (
    <LoaderInt></LoaderInt>
  )
}

export default Loader