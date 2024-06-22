const App = () => {
  return (
    <>
      <header className="ui">
        <div className="flex justify-between my-4">
          <h1 className="text-4xl font-bold self-center">HaHoLuLa</h1>
          <p className="self-center">로그인</p>
        </div>
      </header>

      <main className="ui">
        <div className="flex justify-end">
          <button className="bg-blue-400 rounded-full px-2 py-1 text-white">글쓰기</button>
        </div>

        <div>
          <div className="flex justify-between flex-wrap md:px-7 first:border-t border-b">
            <span className="md:inline hidden w-14 text-center">글번호</span>
            <span className="md:w-2/3 w-full">제목</span>
            <span className="md:m-0 mr-auto">작성자</span>
            <span>작성일</span>
            <span>조회수</span>
          </div>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <div key={index} className="flex justify-between flex-wrap md:px-10 first:border-t border-b">
              <span className="md:inline hidden w-5 text-center">{index + 1}</span>
              <span className="md:w-2/3 w-full">안녕하세요</span>
              <span className="md:m-0 mr-auto">작성자</span>
              <span>2024-06-22</span>
              <span>0</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <ul className="flex">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </main>

      {/* <footer className="ui">
        푸터
      </footer> */}
    </>
  )
}

export default App