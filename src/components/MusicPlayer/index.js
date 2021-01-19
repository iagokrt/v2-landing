import React, { useState, useEffect } from 'react'

import './style.scss'

import { RiMusic2Fill } from 'react-icons/ri'

const useAudio = (url) => {
  const [audio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [audio, playing])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [audio])

  return [playing, toggle]
}

const MusicPlayer = ({ url }) => {
  const [playing, toggle] = useAudio(url)

  return (
    <div className="wrapper">
      <button onClick={toggle}>
        <RiMusic2Fill size={22} color={playing ? '#2ec1ac' : '#000111'} />
      </button>
    </div>
  )
}

export default MusicPlayer
