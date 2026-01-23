import { useState } from "react"

const Page1 = () => {
    const [data, setData] = useState(0);
    let x = 0
    console.log(data, x)
    const event = () => {
        setData(data + 1)
        x += 1}
    return(
        <>
        <button onClick={event}>증가</button>
        </>
    )

}

export default Page1