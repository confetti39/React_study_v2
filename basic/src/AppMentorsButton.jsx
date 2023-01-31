import React, { useCallback, useMemo, useReducer, memo } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback(() => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: "updated", prev, current });
  }, []);

  const handleAdd = useCallback(() => {
    const addName = prompt(`멘토의 이름은?`);
    const addTitle = prompt(`멘토의 직함은?`);
    dispatch({ type: "added", addName, addTitle });
  }, []);

  const handleDelete = useCallback(() => {
    const deleteName = prompt(`누구를 삭제하고 싶은가요?`);
    dispatch({ type: "deleted", deleteName });
  }, []);

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button text="멘토 이름 바꾸기" onClick={handleUpdate} />
      <Button text="추가하기" onClick={handleAdd} />
      <Button text="삭제하기" onClick={handleDelete} />
    </div>
  );
}

const Button = memo(({ text, onClick }) => {
  console.log("Button", text, "re-rendering 🤔");
  const result = useMemo(() => calculateSomething(), []); //[]에 있는 state의 상태가 변화하면 다시 캐시에 저장함
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        margin: "0.4rem",
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

function calculateSomething() {
  for (let i = 0; i < 10000; i++) console.log("😆");
  return 10;
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
