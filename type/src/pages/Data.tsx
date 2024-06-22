import axios from "axios";
import { useEffect, useState } from "react";

interface Subway {
  subwayId: string
  trainLineNm: string
  arvlMsg2: string
  arvlMsg3: string
  barvlDt: string
}

const subwayLines: { [key: string]: string } = {
  "1001": "1호선",
  "1002": "2호선",
  "1003": "3호선",
  "1004": "4호선",
  "1005": "5호선",
  "1006": "6호선",
  "1007": "7호선",
  "1008": "8호선",
  "1009": "9호선",
  "1061": "중앙선",
  "1063": "경의중앙선",
  "1065": "공항철도",
  "1067": "경춘선",
  "1075": "수인분당선",
  "1077": "신분당선",
  "1092": "우이신설선",
  "1093": "서해선",
  "1081": "경강선",
  "1032": "GTX-A"
};

const Data = () => {
  const [ input, setInput ] = useState<string>("")
  const [ data, setData ] = useState<Subway[]>([])

  useEffect(() => {
    axios.get(`http://swopenapi.seoul.go.kr/api/subway/${process.env.REACT_APP_SUBWAY_API}/json/realtimeStationArrival/0/10/${input}`)
    .then(res => {console.log(res.data?.realtimeArrivalList); setData(res.data?.realtimeArrivalList)})
    .catch(e => console.error(e))
  }, [input])

  return (
    <>
      <input className="w-96 border-2 border-blue-500 focus:outline-none" type="text" placeholder="역명을 입력하세요" onChange={(e) => setInput(e.target.value)} />
      {data?.map((item, index) => (
        <>
        <div key={index}>
          <p>{subwayLines[item.subwayId]}</p>
          <p>{item.trainLineNm}</p>
          <span>{item.arvlMsg2}</span>
          <span>{item.arvlMsg3}</span>
          {/* <p>{item.barvlDt}</p> */}
        </div>
        <br />
        </>
      ))}
    </>
  )
}

export default Data