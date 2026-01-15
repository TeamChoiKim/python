import fs from 'fs';

const JSON_PATH = "./data/memo.json";

// JSON 파일에서 데이터를 읽어와 자바스크립트 객체로 반환
const getData = () => {
    try {
        const f = fs.readFileSync(JSON_PATH, "utf-8");
        return JSON.parse(f);
    } catch (error) {
        console.error("데이터 파일을 읽어오는 중 오류 발생:", error.message);
        return { txt: "", list: [] }; // 오류 발생 시 기본값 반환
    }
};

// 자바스크립트 객체를 JSON 형태로 파일에 저장
const saveData = (data) => {
    try {
        fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        console.error("데이터 파일을 저장하는 중 오류 발생:", error.message);
    }
};

// 메모 추가 (Create)
export const add = (word) => {
    const data = getData();
    data.list.push(word);
    saveData(data);
    console.log(`단어 추가 완료: "${word}"`);
};

// 목록 보기 (Read)
export const list = () => {
    console.log("--- 단어 목록 ---");        
    const data = getData();
    if (data.list.length === 0) {
        console.log("목록이 비어 있습니다.");
        return;
    }
    data.list.forEach((v, i) => console.log(`${i + 1}. ${v}`));
};

// 메모 삭제 (Delete)
export const remove = (word) => {
    const data = getData();
    const initialLength = data.list.length;
    
    // 입력받은 단어와 일치하는 항목을 제외하고 새로운 배열 생성
    data.list = data.list.filter(item => item !== word);

    if (data.list.length < initialLength) {
        saveData(data);
        console.log(`단어 삭제 완료: "${word}"`);
    } else {
        console.log(`"${word}" 단어를 목록에서 찾을 수 없습니다.`);
    }
};

// 메모 수정 (Update)
export const update = (oldWord, newWord) => {
  const data = getData();

  const index = data.list.indexOf(oldWord);

  if (index === -1) {
    console.log("해당 단어를 찾을 수 없습니다.");
    return;
  }

  data.list[index] = newWord;

  fs.writeFileSync("./data/memo.json", JSON.stringify(data, null, 2), "utf-8");
  console.log(`수정됨: ${oldWord} → ${newWord}`);
};