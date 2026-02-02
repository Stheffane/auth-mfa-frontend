import styled from "styled-components";

export const Blob = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
  height: 500px;
  width: 500px;
  position: relative;
  right: 5em;

  .blob {
    border-radius: 100px;
    filter: blur(60px);
  }

  .yellow {
    background-color:  #1d3c53;//#ecbdc1;
    position: absolute;
    top: 200px;
    left: 100px;
    height: 300px; //200px
    width: 300px; //200px
    
    animation: yellow 8s infinite ease;
  }

  .green {
    background-color: #163349;//#d7a1a4;
    position: absolute;
    top: 80px;
    right: -20px;
    height: 300px; //200px
    width: 350px; //250px
    
    animation: green 8s infinite ease;
  }

  .red {
    background-color: #204864;//#8d9c80;
    position: absolute;
    right: 0;
    top: 300px;
    height: 350px; //250px
    width: 300px; //200px
    
    animation: red 8s infinite linear;
  }

  @keyframes yellow {
    0% {top: 200px; left: 100px; transform: scale(1);}
    30% {top: 300px; left: 150px; transform: scale(1.2);}
    60% {top: 100px; left: 200px; transform: scale(1.3);}
    100% {top: 200px; left: 100px; transform: scale(1);}
  }

  @keyframes green {
    0% {top: 80px; right: -20px; transform: scale(1.2);}
    30% {top: 300px; right: -20px;transform: scale(1);}
    60% {top: 200px; right: 100px;transform: scale(1);}
    100% {top: 80px; right: -20px; transform: scale(1.2);}
  }

  @keyframes red {
    0% {top: 250px; right: 0px; transform: scale(1);}
    30% {top: 150px; right: 150px;transform: scale(1.4);}
    60% {top: 250px; right: 100px;transform: scale(1);}
    100% {top: 250px; right: 0px; transform: scale(1);}
  }
`