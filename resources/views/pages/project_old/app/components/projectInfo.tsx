import * as CSS from '../styles'

export default function ProjectInfo({ content }) {
  return (
    <div className={CSS.Info}>
      {content.map((v: any, i: number) => (
        <div key={i}>
          <h4>{v.title} :</h4>
          <p>{v.description}</p>
        </div>
      ))}
    </div>
  )
}
