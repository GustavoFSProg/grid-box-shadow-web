import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  width: 75%;
  margin-top: 5rem;

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
  font-family: 'Roboto';
  color: #004080;
  /* background: #ccccff; */
  width: 98.8vw;
  height: auto;
  align-items: center;
  justify-content: center;

  padding-bottom: 80px;

  z-index: 999;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    z-index: 999;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  /* font-family: 'Prosto One' ; */
  color: #004080;
  font-size: 1rem;

  align-items: flex-start;
  justify-content: left;
  width: 86%;
  height: auto;
  background: #d9d9d9;
  padding-top: 13px;
  padding-bottom: 10px;
  padding-left: 14px;
  /* padding-right: 1px; */
  border-radius: 7px;
  /* margin-left: 10px; */
  /* box-shadow:  8px 8px 2px 1px rgba(0, 0, 0, 0.2) ; */
  /* box-shadow: 8px 8px 2px 1px rgba(0, 0, 0, 0.3); */
  /* box-shadow:  8px 8px 2px 1px black ; */
  cursor: pointer;

  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px ;
  padding-bottom: 20px;
  padding-left: 3px;


  }
`
export const Imagem = styled.img`
  @media screen and (max-width: 800px) {
    width: 80%;
    height: 9rem;
  }
`
