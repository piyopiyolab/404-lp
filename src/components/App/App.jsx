import heroImg from '../../assets/cuate.svg'
import Hero from '../Hero/Hero'
import Nav from '../Nav/Nav'

function App() {

  return (
    <>
      <div className="img-bg"></div>


      <Nav />


      <main className='flex flex-col-reverse sm:flex-row sm:justify-center sm:items-center'>


        <Hero />

        <div className=" w-1/2	mx-auto  flex 	 justify-center items-center">

          <img src={heroImg} className='w-10rem lg:max-w-[30rem]' alt="Hero image 404" />

        </div>
      </main>

    </>
  )
}

export default App
