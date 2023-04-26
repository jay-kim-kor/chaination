export default function Page() {
    return (
      <>
        <div className="h-80 w-full relative">
            <img src="https://www.ghibli.jp/gallery/umi015.jpg" className="object-cover h-full w-full"/>
            <div className="absolute bottom-0 left-1/3 p-4 text-white">
                <p className="underline decoration-sky-500 font-sans text-3xl">캠페인 제목이 여기에 나타나게 할 것입니다</p>
            </div>
        </div>
        <div className="flex items-center justify-evenly h-20 mx-auto w-3/4 border-b">
            <button className="bg-white hover:bg-red-300 hover:text-white transition duration-500 ease-in-out transform hover:scale-110 rounded-full px-4 py-2">캠페인 내용</button>
            <button className="bg-white hover:bg-red-300 hover:text-white transition duration-500 ease-in-out transform hover:scale-110 rounded-full px-4 py-2">기부 내역</button>
        </div>
        <div className="flex items-center justify-center h-screen">
        <div className="mx-auto">
            <img src = "https://www.ghibli.jp/gallery/umi027.jpg"/>
        </div>
        </div>
      </>
    );
  }
  