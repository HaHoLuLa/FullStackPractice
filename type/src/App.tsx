import axios from "axios";
import { useState, FC, useEffect } from "react";

interface Data {
  data?: string
}

const App:FC = () => {
  const [ data, setData ] = useState<Data | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/data`)
    .then(res => {setData(res.data); console.log(res.data)})
    .catch(e => console.error(e))

    axios.post(`http://localhost:8000/send`, {name: "이주현", phone: 12})
    .then(res => {console.log(res.data)})
    .catch(e => console.error(e))
  }, [])

  return (
    <div className="flex justify-center w-2/3 flex-col h-screen items-center text-5xl">
      <h1>받은 데이터</h1>
      <p>{data?.data}</p>
    </div>
  );
}

export default App