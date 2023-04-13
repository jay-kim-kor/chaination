import Header from './Header'

const Main = () => {
    return (
        <div>
            <Header/>
            <div className="container mx-auto px-4 pt-24">
            <h1 className="text-3xl font-bold mb-8">기부 캠페인</h1>
                <div className="flex flex-wrap -mx-4">
            {<img src={"https://www.ghibli.jp/gallery/umi015.jpg"} alt="campaign" className="mx-auto h-auto border border-gray-300" />}
                </div>
            </div>
        </div>
    );
};

export default Main;