import Home from "./pages/Home"
import QrliseLogo from './assets/QrliseLogo.png'
import Desktop from './assets/Desktop.gif'

const App = () => {
  return (
   <>
    <div className="bg-themeBg h-full min-h-screen w-full block mobile:hidden">
      <Home />
    </div>
    <div className="mobile:bg-themeBg mobile:p-20">
    <div className=" hidden mobile:flex mobile:flex-col mobile:items-center mobile:justify-center mobile:py-20 mobile:rounded-xl mobile:bg-white">
          <img src={QrliseLogo} alt="logo" className="w-32 object-cover mb-5" />
          <img src={Desktop} alt="logo" className="w-56 object-cover mb-5" />

          <p className="mx-10 text-center mt-3">Hey there, just a heads up – we're rocking it on mobile devices at the moment! 📱 Let's catch up there!</p>
    </div>
    </div>
   </>
  )
}

export default App