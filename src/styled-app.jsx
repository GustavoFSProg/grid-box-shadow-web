import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
 width: 75%;
 

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Rubik Bubbles' ;
  color: #008000;
 /* background: #ccccff; */
 width: 98.8vw;
 height: auto ;
 align-items: center ;
 justify-content: center ;

   padding-bottom: 80px;


  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 height: auto ;

  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  /* font-family: 'Prosto One' ; */
  color: #004d00;
 
  align-items: center;
  justify-content: center;
  width: 90%;
  height: auto;
  background: #d9d9d9;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 10px;
  margin-left: 10px;
  /* box-shadow:  8px 8px 2px 1px rgba(0, 0, 0, 0.2) ; */
  box-shadow: 8px 8px 2px 1px rgba(0, 0, 0, 0.3);
  /* box-shadow:  8px 8px 2px 1px black ; */
  cursor: pointer;

  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
