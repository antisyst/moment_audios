import styled from "styled-components";
import ContentAction from "./content";

const MainLayout = styled.main `
  text-align: center;
  padding-top: 3vh;
`

const Navigation = styled.nav `
  width: 100%;
  position: fixed;
  text-align: center;
  top: 0;
  padding: 17px;
  color: var(--color-white);
  backdrop-filter: blur(10px);

`
const NavContent = styled.p `
  text-transform: uppercase;
  font-size: 19px;

  &::before {
    content: "●";
    vertical-align: text-bottom;
    margin-right: 9px;
  }

  &::after {
    content: "●";
    vertical-align: text-bottom;
    margin-left: 9px;
  }
`
const MainPage = () => {

  return (
    <MainLayout>
      <Navigation>
          <NavContent>just do it for yourself</NavContent>
      </Navigation>
      <ContentAction/>
      <h2 className='coming_text'>Davamı gələcək...</h2>
    </MainLayout>
  )
}

export default MainPage