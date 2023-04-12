const Header = () => {
  const currentDay = new Date();
  const currentYear = currentDay.getFullYear();

  return (
    <div>
      <header className="fixed inset-x-0 top-0 z-50 left-0 bg-white text-gray-700 body-font border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img alt="logo" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSStk3c-ZBj1qmxvetPbCkHuqolL5n85lvB4w&usqp=CAU'} className="w-8 h-8 -mr-1" />
            <span className="ml-3 text-xl text-indigo-500 text-red-300">기현이에게 주는 신의 물질</span>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <div className="mr-5 text-gray-1000 hover:text-red-300 cursor-pointer"
            >기부하기
            </div>
            <div className="mr-5 text-gray-1000 hover:text-red-300 cursor-pointer"
            >내 정보
            </div>
            <div className="mr-5 text-gray-1000 hover:text-red-300 cursor-pointer"
            >로그인
            </div>
            <div className="mr-5 text-gray-1000 hover:text-red-300 cursor-pointer"
            >검색
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
