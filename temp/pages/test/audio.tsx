import { useState, useEffect, useRef } from 'react'
const Audiourl = '/audio/WebSound-01.mp3'

const useAudio = (url) => {
  const [audio, setAudio] = useState(null)
  const [playing, setPlaying] = useState(true)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    setAudio(new Audio(URL))
    audio.play()
  }, [audio])
  //   useEffect(() => {
  //     playing ? audio.play() : audio.pause()
  //   }, [playing])

  //   useEffect(() => {
  //     audio.addEventListener('ended', () => setPlaying(false))
  //     return () => {
  //       audio.removeEventListener('ended', () => setPlaying(false))
  //     }
  //   }, [])

  return [playing, toggle]
}

// const Player = ({ url }) => {
//   const [playing, toggle] = useAudio(url)

//   return (
//     <div>
//       <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
//     </div>
//   )
// }

// export default Player

const Player = () => {
  //   const [playing, toggle] = useAudio(Audiourl)
  const BGaudio = useRef(null)

  useEffect(() => {
    BGaudio.current.play()
  }, [])

  return (
    <div>
      {/* <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button> */}
      <audio ref={BGaudio} loop>
        <source src='/audio/WebSound-01.mp3' type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default Player