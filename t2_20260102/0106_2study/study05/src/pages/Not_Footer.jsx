export const NotFound = () => {
  return (
    <div className="text-center">
      <h1>404</h1>
      <p>페이지를 찾을 수 없습니다.</p>
    </div>
  )
}

export const Footer = () => {
  const styles = {color: "#7eb047", fontWeight: "bold"}
  return (
    <div className="mt-5 p-4 bg-dark text-white text-center">
      <p>SHELL<span style={styles}>FOLDER</span></p>
    </div>
  )
}


