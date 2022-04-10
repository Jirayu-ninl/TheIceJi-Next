/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch';

const Note = ({ note }) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (isDeleting) {
      deleteNote()
    }
  }, [isDeleting])


  const deleteNote = async () => {
    const noteId = router.query.id
    try {
      const deleted = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
        method: 'Delete',
      })
      console.log(deleted)
      router.push('/notes')
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async () => {
    setIsDeleting(true)
  }

  return (
    <div className='note-container'>
      {isDeleting ? (
        <h1>Loading</h1>
      ) : (
        <>
          <h1>{note.title}</h1>
          <p>{note.description}</p>
          <button color='red' onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </div>
  )
}

Note.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/notes/${id}`)
  const { data } = await res.json()

  return { note: data }
}

export default Note
