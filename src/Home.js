import React from "react";
import styled from "styled-components";
import images from "./images/banner.jpg";
import nike from "./images/nike.png";
import Navbar from "./Navbar";
import Sort from "@material-ui/icons/Sort";

const data = [
  {
    id: 1,
    url: `${nike}`
  },
  {
    id: 1,
    url: `${nike}`
  },
  {
    id: 1,
    url: `${nike}`
  }
];

const Home = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [active, setActive] = React.useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const goToSlide = (index) => {
    setActiveIndex(index);
  };
  return (
    <Container>
      <Container01>
        <Container02>
          <Navbar />

          <Text4>AIR MAX</Text4>
          {data.map((slide, i) =>
            i === activeIndex ? (
              <Container04
                style={{ backgroundImage: `url(${slide.url})` }}
              ></Container04>
            ) : (
              <h4 style={{ position: "absolute" }}>f</h4>
            )
          )}
        </Container02>
      </Container01>
      <Container05>
        {data.map((slide, index) => (
          <Container06 onClick={() => goToSlide(index)}></Container06>
        ))}
      </Container05>
      <Icon onClick={handleClick}>
        <Sort />
      </Icon>
      {active ? (
        <Mobilemenu>
          <Text5>Home</Text5>
          <Text5>Catalog</Text5>
          <Text5>Contact</Text5>
        </Mobilemenu>
      ) : (
        <Mobilemenu style={{ display: "none" }} />
      )}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;

const Container01 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  align-self: center;
  align-items: center;
  flex-direction: row;
  background-size: cover;
  background-repeat:no-repeat;
  justify-content: center;
  background-image: url('${images}');
  @media (max-width: 991px) {
    width: 100%;
    flex-wrap: nowrap;
  }
  @media (max-width: 479px) {
    width: 100%;
    position: absolute;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`;

const Container02 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  opacity: 1;
  flex-wrap: wrap;
  position: static;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: rgba(96, 0, 238, 0.67);
  @media (max-width: 991px) {
    width: 991px;
  }
  @media (max-width: 767px) {
    width: 767px;
  }
  @media (max-width: 479px) {
    width: 479px;
  }
`;

const Text5 = styled.span`
  @media (max-width: 479px) {
    position: static;
    text-align: center;
    align-self: center;
    margin-right: 0;
    margin-left: 0;
    margin-top: 30px;
    color: #ffffff;
    font-size: 30px;
  }
`;
const Text4 = styled.span`
  color: #ffffff;
  font-size: 6em;
  position: absolute;
  font-family: barlow condensed;

  @media (max-width: 991px) {
    color: #ffffff;
    width: 392px;
    height: 127px;
    font-size: 5em;
    position: absolute;
    text-align: center;
    font-family: barlow condensed;
  }
`;

const Container04 = styled.div`
  width: 392px;
  height: 290px;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  margin-top: -311px;
  align-items: center;
  flex-direction: row;
  background-size: contain;
  justify-content: center;
  background-repeat: no-repeat;
  animation-name: bounce-top;
  animation-duration: 2.2s;
  animation-timing-function: ease-out;
  animation-delay: 0.1s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  @keyframes bounce-top {
    0% {
      -webkit-transform: translateY(-195px);
      transform: translateY(-195px);
    }
    25% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-24px);
      transform: translateY(-24px);
    }
    55% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    65% {
      -webkit-transform: translateY(-12px);
      transform: translateY(-12px);
    }
    75% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    82% {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
    }
    87% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    93% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @media (max-width: 479px) {
    width: 258px;
    height: 228px;
    margin: 0;
    justify-content: center;
  }
`;

const Container05 = styled.div`
  width: 86px;
  height: 532px;
  z-index: 1;
  display: flex;
  flex-wrap: nowrap;
  align-self: flex-end;
  align-items: baseline;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 479px) {
    width: 50%;
    height: 453px;
    align-self: center;
    align-items: flex-start;
    padding-top: 390px;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    bottom: 0px;
  }
`;

const Container06 = styled.div`
  cursor: pointer;
  width: 16px;
  height: 16px;
  margin: 4px;
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 24px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: none;
`;

// const Container07 = styled(Container06)``;

// const Container08 = styled(Container06)``;

// const Container09 = styled.div`
//   width: 16px;
//   height: 16px;
//   margin: 4px;
//   display: flex;
//   flex-wrap: wrap;
//   align-self: center;
//   align-items: center;
//   border-color: #ffffff;
//   border-width: 1px;
//   border-radius: 24px;
//   flex-direction: row;
//   justify-content: flex-start;
// `;
const Icon = styled.svg`
  width: 24px;
  color: white;
  height: 24px;
  display: none;
  @media (max-width: 479px) {
    cursor: pointer;
    display: block;
    top: 0px;
    fill: #ffffff;
    left: px;
    right: 10px;
    width: 42px;
    height: 70px;
    position: absolute;
  }
`;

const Mobilemenu = styled.div`
 animation-name: swirl-in-right-clock;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
}
@keyframes swirl-in-right-clock {
  0%{
    -webkit-transform: rotate(-540deg) scale(0);
    transform: rotate(-540deg) scale(0);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    opacity: 0;
  }
  100%{
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    opacity: 1;
  }
}
  display: none;
  @media (max-width: 479px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
   
    background-color: rgba(96, 0, 238, 0.67);
    font-family: barlow condensed;
    z-index: 1;
    position: absolute;
    right: 0px;
    width: 201px;
    top: 60px;
    height: 330px;
    align-self: center;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
`;
