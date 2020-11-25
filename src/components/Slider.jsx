import React from 'react';
import styled from 'styled-components';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const Container = styled.div`
  margin-bottom: 100px;
  width: 90vw;
  margin: 0 auto;

  .slides {
    height: 300px;

    button {
      width: 5px;
      height: 5px;
      background-color: salmon;
    }
  }
`;

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Slider() {
  return (
    <Container>
      <AutoplaySlider 
      className="slides"
      play={true}
      cancelOnInteraction={false} 
      interval={3000}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </AutoplaySlider>
    </Container>
  )
}

export default Slider
