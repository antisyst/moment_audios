import  { useState, useEffect } from 'react'
import styled from 'styled-components';

const ContentContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 8vh;
    padding: 0 3%;
    margin-bottom: 4vh;
`
const CartElement = styled.div `
    border-radius: 30px;
    padding: 20px;
    background: var(--color-prim);
    display: flex;
    text-align: left;
    border: 2px solid var(--color-main);
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 470px;
    height: 260px;

    p {
        text-align: left;
        font-size: 17px;
        font-weight: 500;
    }
    h2 {
        margin-bottom: 3px;
    }

    @media only screen and (max-width: 600px) {
        height: auto;
    }
`

interface Entry {
    date: string;
    content: string;
  }

const ContentAction = () => {

    const [data, setData] = useState<Entry[]>([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/antisyst/task-management/main/database.json')
      .then((response) => response.json())
      .then((jsonData: Entry[]) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <ContentContainer>
         {data.map((entry, index) => (
          <CartElement key={index}>
            <h2>{entry.date}</h2>
            <p>{entry.content}</p>
          </CartElement>
        ))}
    </ContentContainer>
  )
}

export default ContentAction