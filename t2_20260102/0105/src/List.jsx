import { useNavigate } from "react-router"

const List = ()=>{

    const navigate = useNavigate();
    const onclick = (user)=>{
        navigate("/detail", {state: user})
    }
    const style1 = {cursor: "pointer"}
    const data = [
        {id: 1, "name": "스티브", "email": "jobs@shellfolder.com", "joinDay": "2023-02-28", "pwd": "1", "gender": "1"},
        {id: 2, "name": "에브릴", "email": "lavigne@shellfolder.com", "joinDay": "2023-02-27", "pwd":"2", "gender": "2"}
    ];
    return(
<div className="container mt-3">
	  <h1 className="display-1 text-center">사용자 목록</h1>
	  <div className="btn-group">
	    <button onClick={()=>navigate("/new", {state:data})} className="btn btn-primary">사용자 추가</button>
	  </div>
	  <table className="table table-hover mt-3">
	    <thead className="table-dark">
	      <tr>
	      	<th>이름</th>
	        <th>이메일</th>
	        <th>가입날짜</th>
	      </tr>
	    </thead>
	    <tbody>
	      {
            data.map((v)=>(
            <tr key={v.id} style={style1} onClick={()=>onclick(v)}>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td>{v.joinDay}</td>
            </tr>
            ))
          }
          
	    </tbody>
	  </table>
	</div>
)}

export default List