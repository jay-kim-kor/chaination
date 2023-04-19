//헤더에서 기부하기 클릭

interface BodyProps{
    bodyVisible: boolean;
    onClose: () => void;
}

const Body = ({ bodyVisible, onClose }: BodyProps) => {
    if (!bodyVisible) {
        return null;
    }
    return (
        <>
        <div className="flex justify-center py-8">
  <div className="w-full max-w-xl px-4">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">기부하기</h2>
        <form className="grid grid-cols-1 gap-4">
          <div className="col-span-1">
            <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">기부 금액</label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input type="text" id="amount" name="amount" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00" aria-describedby="amount-currency" />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">Currency</label>
                <select id="currency" name="currency" className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                  <option>ETH</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">이름</label>
            <input type="text" id="name" name="name" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
          </div>
          <div className="col-span-1">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">이메일</label>
            <input type="email" id="email" name="email" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
          </div>
          <div className="col-span-1">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">메시지</label>
            <textarea id="message" name="message" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
          </div>
          <div className="col-span-1">
            <button type="submit" className="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">기부하기</button>
          </div>
          <div>
          <button type="button" className="w-full px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={onClose}
            >
            취소
            </button> 
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Body;