import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  return (
    <div className="flex overflow-hidden rounded-lg bg-gray-700 bg-opacity-40 bg-clip-padding p-6 backdrop-blur-md backdrop-filter sm:h-[450px] md:h-[550px]">
      <Sidebar />
      {/* <MessageContainer/> */}
    </div>
  )
}

export default Home
