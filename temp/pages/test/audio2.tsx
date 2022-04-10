import { useState, useEffect, useRef } from 'react'
const Audiourl = '/audio/WebSound-01.mp3'

const useAudio = () => {
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  return [playing, toggle]
}

const Player = () => {
  const [playing, toggle] = useAudio(Audiourl)
  const BGaudio = useRef(null)

  useEffect(() => {
    playing ? BGaudio.current.play() : BGaudio.current.pause()
  }, [playing])

  return (
    <div>
      <button style={{ paddingTop: 150 }} onClick={toggle}>
        {playing ? 'Pause' : 'Play'}
      </button>
      <audio ref={BGaudio} loop>
        <source src={Audiourl} type='audio/mpeg' />
      </audio>
    </div>
  )
}

export default Player
