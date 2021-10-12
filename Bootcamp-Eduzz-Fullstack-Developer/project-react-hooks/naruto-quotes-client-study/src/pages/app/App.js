import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Quotes } from '../../components/quotes/Quotes';
import { getQuote } from '../../services';
import narutoImg from '../../images/naruto.png';
import jutsoSound from '../../sounds/jutso.mp3';

const audio = new Audio(jutsoSound);

export function App () {
  const isMounted = useRef(true)

  const [ quote, setQuote ] = useState({
    speaker: 'Loading speaker...',
    quote: 'Loading quote...'
  });

  const onUpdate = async () => {
    const quote = await getQuote();

    if(isMounted.current){
      audio.play();
      setQuote(quote);
    }
      
  }

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false
    }
  }, []);

  return (
    <Content>
      <Quotes {...quote} onUpdate={onUpdate}/>
      <NarutoImg src={narutoImg} alt="Naruto with a kunai" />
    </Content>
  )
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;
