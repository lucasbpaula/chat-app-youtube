const Conversation = () => {
  return (
    <>
      <div className="flex cursor-pointer items-center gap-2 rounded p-2 py-1 hover:bg-purple-500">
        <div className="avatar offline">
          <div className="w-12 rounded-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex justify-between gap-3">
            <p className="font-bold text-gray-200">John Doe</p>
            <span className="text-xl">🎃</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 h-1 py-0"></div>
    </>
  )
}

export default Conversation
