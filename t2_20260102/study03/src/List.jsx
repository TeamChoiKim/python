import { useNavigate, useLocation } from "react-router";
import { useState, useEffect } from "react";


const List = () => {
    
    const navigate = useNavigate();
    const onclick = () => {
        navigate("/detail")
    }
    
    const data = [
        {key: 1, "name": "스티븐", "email": "jobs@shellfolder.com", "date": "2023-02-28"},
        {key: 2, "name": "에브릴", "email": "lavigne@shellfolder.com", "date": "2023-02-27"}
    ]

        return(
    <div className="container mt-3">
	  <h1 className="display-1 text-center">사용자 목록</h1>
	  <div className="btn-group">
	    <button type="button" className="btn btn-primary">사용자 추가</button>
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
            data.map((v,i) => (
                <tr key={i} onClick={onclick}>
                    <td>{v.name}</td>
                    <td>{v.email}</td>
                    <td>{v.date}</td>
                </tr>
            ))
          }
	    </tbody>
	  </table>
	</div>
        )
}

export default List