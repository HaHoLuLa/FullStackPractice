const NewLayout = () => {
  return (
    <div className="bg-black text-white w-screen h-screen overflow-x-hidden">
      <header className="ui">
        <div className="flex justify-between my-[18px]">
          <div className="flex">
            <h1 className="text-4xl font-bold">HaHoLuLa</h1>
            <div className="ml-[20px] md:flex hidden justify-between w-auto items-center">
              <span>메뉴</span>
              <span>메뉴</span>
              <span>메뉴</span>
            </div>
          </div>
          <span className="self-center">메뉴</span>
        </div>
      </header>

      <main className="ui md:flex md:justify-between md:items-start">
        <div className="md:w-[75%] border border-white rounded-[10px] p-[10px]">
          메인
        </div>
        <div className="md:w-[25%] border-[1px] rounded-[10px] border-white md:sticky h-auto md:top-0 p-[10px] md:ml-[10px] md:mt-0 mt-[20px]">
          사이드 메뉴임다
        </div>
      </main>

      <footer className="ui border rounded-[10px] border-white p-[10px] md:mt-0 mt-[20px]">
        푸터
      </footer>
    </div>
  )
}

export default NewLayout