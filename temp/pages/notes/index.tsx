/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';

const Index = ({ notes }) => {
  return (
    <div className='notes-container'>
      <h1>Notes</h1>
      <div className='grid wrapper'>
        {notes.map((note) => {
          return (
            <div key={note._id}>
              <Link href={`/notes/${note._id}`}>
                <a>{note.title}</a>
              </Link>
              <Link href={`/notes/${note._id}`}>
                <button>View</button>
              </Link>
              <Link href={`/notes/${note._id}/edit`}>
                <button>Edit</button>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/notes')
  const { data } = await res.json()
  return { notes: data }
}

export default Index
