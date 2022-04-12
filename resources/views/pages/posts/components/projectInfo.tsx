function ProjectInfo({ content }) {
  return (
    <div className='grid grid-cols-2 gap-4 mt-24 mb-0 md:mt-48 md:mb-24 lg:grid-cols-4 lg:gap-8'>
      {content.map((v: any, i: number) => (
        <div
          key={i}
          className='py-2 text-primary-0 hover:text-black bg-black/30 hover:bg-primary-0
          rounded-md border border-primary-0 backdrop-blur-md lg:py-4 Anim-1 AnimTranslate-4'
        >
          <h4 className='text-xs font-bold text-center sm:text-base'>{v.title} :</h4>
          <p className='text-xs text-center sm:text-base'>{v.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ProjectInfo