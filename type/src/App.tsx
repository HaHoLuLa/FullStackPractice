const App = () => {
  return (
    <>
      <header className="ui">
        <div className="flex justify-between my-3">
          <h1 className="text-4xl font-bold self-center">HaHoLuLa</h1>
          <p className="self-center">로그인</p>
        </div>
      </header>

      <main className="ui">
        <div className="flex justify-end">
          <button className="bg-blue-400 rounded-full px-2 py-1 text-white">글쓰기</button>
        </div>

        <div>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <div className="flex justify-between flex-wrap">
              <span className="md:inline hidden">{index + 1}</span>
              <span className="md:w-1/2 w-full">안녕하세요</span>
              <span className="md:m-0 ml-auto">작성자</span>
              <span>작성일</span>
              <span>조회수</span>
            </div>
          ))}
        </div>
      </main>

      <footer className="ui">
        푸터
      </footer>
    </>
  )
}

export default App