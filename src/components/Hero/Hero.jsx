import Button from "../Button/Button"


function Hero() {
    return (
        <section className="mx-auto text-center sm:text-left px-4">
            <h1 className="text-5xl">OOPS ..
                <span className="block">Page not found</span></h1>


            <p className="py-8 text-slate-600 max-w-[25rem]">The page you are looking for doesn’t exist or any other error occurred, go back to home page.</p>
            <Button text='Go back'
                className={'hover:translate-y-1 hover:border-slate-900 hover:text-slate-900 duration-300 border-2 py-2 px-4 text-2xl rounded-lg'} />
        </section >)
}
export default Hero