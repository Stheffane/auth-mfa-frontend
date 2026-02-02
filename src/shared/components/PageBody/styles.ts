import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f1f4f5; //#F7F6F1;

  .input-block {
    width: 40%;
    height: 60%;
    padding: 50px 25px;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;

    /* position: absolute; */
    z-index: 1;

    background: rgba(255, 255, 255, 0.10);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(5.1px);
  }

  h1 {
    padding-bottom: 20px;
    color: #435f75;
  }

  p {
    padding-bottom: 15px;
  }
`