const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="avatar chat-image">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <div className="chat-bubble">
        It was said that you would, destroy the Sith, not join them.
      </div>
      <div className="gap1 chat-footer flex items-center text-xs opacity-50">
        12:46
      </div>
    </div>
  )
}

export default Message
