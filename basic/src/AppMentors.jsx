import React, { useState } from "react";

export default function AppMentors() {
  const [person, setPerson] = useState({
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
  });

  const handleChangeMentor = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return { ...mentor, name: current };
        }
        return mentor;
      }),
    }));

    //   const index = person.mentors.findIndex((data) => {
    //     return data.name == prev;
    //   });

    //   if (index == -1) alert(`${prev}라는 이름이 없습니다.`);

    //   let newObj = { ...person };
    //   newObj.mentors[index].name = current;
    //   setPerson(newObj);

    //   console.log(person);
  };

  const handleAddMentor = () => {
    const addName = prompt(`추가하려는 멘토의 이름을 입력하세요.`);
    const addTitle = prompt(`추가하려는 멘토의 타이틀을 입력하세요.`);

    const addMentorObj = { name: addName, title: addTitle };
    let newObj = { ...person };
    newObj.mentors.push(addMentorObj);
    setPerson(newObj);
  };

  const handleDeleteMentor = () => {
    const deleteName = prompt(`식제하려는 멘토의 이름을 입력하세요.`);

    const index = person.mentors.findIndex((data) => {
      return data.name == deleteName;
    });

    let newObj = { ...person };
    newObj.mentors.splice(index, 1);
    setPerson(newObj);
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
      <button onClick={() => handleChangeMentor()}>멘토의 이름을 바꾸기</button>
      <button onClick={() => handleAddMentor()}>멘토 추가하기</button>
      <button onClick={() => handleDeleteMentor()}>멘토 삭제하기</button>
    </div>
  );
}
