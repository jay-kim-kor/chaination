import Image from "next/image";

// next/image는 src에 들어갈 경로를 미리 불러와야 함
import logo from "../../../public/donate-logo.png";
import Link from "next/link";
import MetamaskInfo from "./MetamaskInfo";

export default function Header() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 left-0 bg-white text-gray-700 body-font border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image
                alt="logo"
                src={logo}
                className="w-8 h-8 -mr-1"
                width={2}
                height={2}
              />
              <span className="ml-3 text-xl text-indigo-500 text-red-300">
                Chaination
              </span>
            </div>
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/mypage">
              <div className="mr-5 text-gray-1000 hover:text-red-300 cursor-pointer">
                내 정보
              </div>
            </Link>
            <MetamaskInfo />
            <div className="mr-5 text-gray-1000 hover:text-red-300 cursor-pointer">
              검색
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
