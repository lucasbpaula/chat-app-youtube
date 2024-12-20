import { BsSend } from 'react-icons/bs'

const MessageInput = () => {
  return (
    <form className="my-3 px-4">
      <div className="relative w-full">
        <input
          type="text"
          className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white"
          placeholder="Send a message"
        />

        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <BsSend />
        </button>
      </div>
    </form>
  )
}

export default MessageInput
