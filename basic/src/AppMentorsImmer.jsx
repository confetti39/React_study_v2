import React, { useState } from "react";
import { useImmer } from "use-immer";

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    updatePerson((person) => {
      const mentor = person.mentors.find((mentor) => mentor.name === prev);
      mentor.name = current;
    });
  };

  const handleAdd = () => {
    const name = prompt(`추가하려는 멘토의 이름을 입력하세요.`);
    const title = prompt(`추가하려는 멘토의 타이틀을 입력하세요.`);
    updatePerson((person) => {
      person.mentors.push({ name: name, title: title });
    });
  };

  const handleDelete = () => {
    const deleteName = prompt(`식제하려는 멘토의 이름을 입력하세요.`);
    updatePerson((person) => {
      const index = person.mentors.findIndex(
        (mentor) => mentor.name === deleteName
      );
      person.menotrs.splice(index, 1);
    });
  };

  return (
    <div>
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
        <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
        <button onClick={handleAdd}>멘토 추가하기</button>
        <button onClick={handleDelete}>멘토 삭제하기</button>
      </div>
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
