import styled from "styled-components";
import AudioCard from "./card";
import database from "../database/content.json";

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
  font-size: 19px;
  font-weight: bold;

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
const CardContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 10px 4%;
    margin-top: 10vh;
    justify-content: center;
    flex-wrap: wrap;
`
const MainPage = () => {

  return (
    <MainLayout>
      <Navigation>
          <NavContent>unforgettable...</NavContent>
      </Navigation>
      <CardContainer>
      {database.map((item, index) => (
        <AudioCard key={index} name={item.name} audio={item.audio} />
      ))}
      </CardContainer>
      <h2 className="last_audio_content">Hamısı deyil, sadəcə yadda qalanlar...</h2>
    </MainLayout>
  )
}

export default MainPage