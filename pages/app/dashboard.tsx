const Dashboard = () => {
  return (
    <div className='flex px-5 pt-28 pb-12 w-screen h-screen bg-gradient-to-tl from-indigo-500 to-cyan-500'>
      <div className='p-6 w-24 Card-back-md-40'></div>
      <div className='flex justify-center items-center ml-5 w-full Card-back-md-40'>
        <p>Coming soon</p>
      </div>
    </div>
  )
}

const Card = () => {
  return (
    <div className='p-6 w-full Card-back-md-40'>
      <p>Hello</p>
    </div>
  )
}

const CardsContainer = () => {
  return (
    <div className='grid grid-cols-6 gap-8 p-6 ml-5 w-full Card-back-md-40'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Dashboard
