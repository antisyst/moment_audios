import React, { useState, useRef } from "react";
import styled from "styled-components";
import { BsFillPlayFill } from 'react-icons/bs';
import { FiPause } from 'react-icons/fi';

const CardComponent = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    padding: 30px;
    width: 350px;
    height: 90px;
    border-radius: 30px;
    border: 2px solid var(--color-main);
    background: var(--color-prim);
`
const ActionButton = styled.button `
    background: none;
    border-radius: 50%;
    padding: 7px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    color: var(--color-white);
    font-size: 25px;
    border: 2px solid var(--color-main);
    align-items: center;

    svg {
        vertical-align: middle;
        padding-left: 1.2px;
        padding-top: 1px;
    }
`
interface AudioCardProps {
  name: string;
  audio: string;
}


const AudioCard: React.FC<AudioCardProps> = ({ name, audio }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <CardComponent>
      <h3>{name}</h3>
      <ActionButton onClick={togglePlay}>
        {isPlaying ? <FiPause/> : <BsFillPlayFill/> }
      </ActionButton>
      <audio ref={audioRef} src={audio} />
    </CardComponent>
  );
};

export default AudioCard;
