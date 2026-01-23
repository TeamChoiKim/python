import { useLocation, useNavigate } from "react-router"
import { useState, useEffect } from "react";

const Select = () => {
    const location = useLocation();
    const user = location.state
    const navigate = useNavigate();
	
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [pwd, setPwd] = useState('');
    // const [gender, setGender] = useState(true);

	const [form, setForm] = useState({
		name: "",
		email: "",
		pwd: "",
		gender: "",
	});

	const handleChange = (e) => {setForm(prev => ({...prev, [e.target.name]: e.target.value}))}

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
    
    const clean = ()=>{
        setForm({
			name: "",
			email: "",
			pwd: "",
			gender: "",
		})
    }

    return(
        <div className="container mt-3">
	  <h1 className="display-1 text-center">사용자 정보</h1>
		<form>
		  <div className="mb-3 mt-3">
		    <label htmlFor="name" className="form-label">이름:</label>
		    <input type="text" className="form-control" id="name" placeholder="이름을 입력하세요." name="name" value={form.name} onChange={handleChange}/>
		  </div>
		  <div className="mb-3 mt-3">
		    <label htmlFor="email" className="form-label">이메일:</label>
		    <input type="email" className="form-control" id="email" placeholder="이메일를 입력하세요." name="email" value={form.email} onChange={handleChange}/>
		  </div>
		  <div className="mb-3">
		    <label htmlFor="pwd" className="form-label">비밀번호:</label>
		    <input type="password" className="form-control" id="pwd" placeholder="비밀번호를 입력하세요." name="pwd" value={form.pwd} onChange={handleChange} />
		  </div>
			<div className="d-flex">
			  <div className="p-2 flex-fill">
			  	<div className="form-check">
					<input type="radio" className="form-check-input" id="radio1" name="gender" value="1" checked={form.gender === "1"} onChange={handleChange} />남성
					<label className="form-check-label" htmlFor="radio1"></label>
				</div>
			  </div>
			  <div className="p-2 flex-fill">
			  	<div className="form-check">
					<input type="radio" className="form-check-input" id="radio2" name="gender" value="2" checked={form.gender === "2"} onChange={handleChange}/>여성
					<label className="form-check-label" htmlFor="radio2"></label>
				</div>
			  </div>
			</div>
		</form>
		<div className="d-flex">
		  <div className="p-2 flex-fill d-grid">
		  	<a href="Update.html" className="btn btn-primary">수정</a>
		  </div>
		  <div className="p-2 flex-fill d-grid">
				<button onClick={clean} className="btn btn-primary">삭제</button>
		  </div>
		  <div className="p-2 flex-fill d-grid">
			<button onClick={()=>navigate("/")} className="btn btn-primary">취소</button>
		  </div>
		</div>
	</div>
    )
}

export default Select