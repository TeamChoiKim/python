import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router"

const Select = () => {
	
	const location = useLocation();
	const user = location.state
	const navigate = useNavigate();

	const [form, setForm] = useState({
		name: "",
		email: '',
		pwd: '',
		gender: '',
	})

	useEffect(() => {
	if (user) {
	  setForm(
		{name: (user.name || ""),
		email: (user.email || ""),
		pwd: (user.pwd || ""),
		gender: (user.gender || ""),
			})
		}
	}, [user]);

	const clean = () => {
		setForm({name: "",
			email:"",
			pwd: "",
			gender: ""
		})
	}
	const handleChange = (e) => {
		e.preventDefault
		setForm(prev => ({...prev, [e.target.name]: e.target.value}))}

	 const mb = [
        {type: "text", id: "name", placeholder:"이름을 입력하세요", name:"name", label: "이름:"},
        {type: "email", id: "email", placeholder:"이메일을 입력하세요", name:"email", label: "이메일:"},
        {type: "password", id: "pwd", placeholder:"비밀번호를 입력하세요", name:"pwd", label: "비밀번호:"},
    ]
    
    const radio =[
        {id: "radio1", value: "1", lable: "남성"},
        {id: "radio2", value: "2", lable: "여성"},
    ]

    return(
       <div className="container mt-3">
	  <h1 className="display-1 text-center">사용자 정보</h1>
		<form>
			{
                mb.map((v)=>(
                <div key={v.id}  className="mb-3 mt-3">
                    <label htmlFor={v.name} className="form-label">{v.label}</label>
                    <input type={v.type} className="form-control" id={v.id} placeholder={v.placeholder} name={v.name} value={form[v.name]} onChange={handleChange}/>
                </div>
                ))
            }
			{
                radio.map((v)=>(
                <div key={v.id} className="d-flex">
                    <div className="p-2 flex-fill">
                        <div className="form-check">
                            <input type="radio" className="form-check-input" id={v.id} name="gender" value={v.value} checked={form.gender === v.value} onChange={handleChange}/>{v.lable}
                            <label className="form-check-label" htmlFor="radio1"></label>
                        </div>
                    </div>
                </div>
                ))
            }
		</form>
		<div className="d-flex">
		  <div className="p-2 flex-fill d-grid">
		  	<button className="btn btn-primary">수정</button>
		  </div>
		  <div className="p-2 flex-fill d-grid">
				<button onClick={()=> clean()} className="btn btn-primary">삭제</button>
		  </div>
		  <div className="p-2 flex-fill d-grid">
			<button onClick={()=>navigate("/")} className="btn btn-primary">취소</button>
		  </div>
		</div>
	</div>
    )
}

export default Select

