export default function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { prev, current } = action; //아래 두 줄을 축약한 것과 같음.
      // const prev = action.prev;
      // const current = action.current;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };
    }
    case "added": {
      const { addName, addTitle } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name: addName, title: addTitle }],
      };
    }
    case "deleted": {
      const { deleteName } = action;
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== deleteName),
      };
    }
    default: {
      throw Error(`알 수 없는 액션 타입이다: ${action.type}`);
    }
  }
}
