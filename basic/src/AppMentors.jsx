import React, { useReducer } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentors() {
  //   const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleChangeMentor = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: "updated", prev, current });
  };

  const handleAddMentor = () => {
    const addName = prompt(`추가하려는 멘토의 이름을 입력하세요.`);
    const addTitle = prompt(`추가하려는 멘토의 타이틀을 입력하세요.`);
    dispatch({ type: "added", addName, addTitle });
  };

  const handleDeleteMentor = () => {
    const deleteName = prompt(`식제하려는 멘토의 이름을 입력하세요.`);
    dispatch({ type: "deleted", deleteName });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor) => (
          <li key={mentor.id}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleChangeMentor}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAddMentor}>멘토 추가하기</button>
      <button onClick={handleDeleteMentor}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: "정요",
  title: "개발자",
  mentors: [
    {
      id: 1,
      name: "밥",
      title: "시니어개발자",
    },
    {
      id: 2,
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
