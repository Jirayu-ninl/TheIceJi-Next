function SectionColor({ content }) {
  return (
    <div className='grid grid-cols-1 gap-8 h-[500px] md:grid-cols-3 md:h-[300px] xl:h-[400px]'>
      {content.map((v: any, i: number) => (
        <div
          className='overflow-hidden relative rounded-md Anim AnimTranslate-10 AnimRotate-1'
          key={i}
          style={{ backgroundColor: v.codeColor }}
        >
          <div className='flex absolute bottom-0 left-0 flex-col justify-center items-center py-3 w-full bg-white/60 backdrop-blur-md md:py-4'>
            <button className='py-0 px-2 text-xs text-black bg-white/60 rounded-md border border-black/40 pointer-events-none md:text-base'>
              {v.codeColor}
            </button>
            <h6 className='mt-2 text-xs font-semibold tracking-wide text-black uppercase md:text-base'>
              {v.name}
            </h6>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SectionColor