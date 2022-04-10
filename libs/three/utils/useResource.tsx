import { useRef, useState, useLayoutEffect } from 'react'

function useResource(optionalRef) {
  const [_, forceUpdate] = useState(false)
  const localRef = useRef(undefined)
  const ref = optionalRef ? optionalRef : localRef
  useLayoutEffect(() => void forceUpdate((i) => !i), [ref.current])
  return [ref, ref.current]
}

export default useResource
