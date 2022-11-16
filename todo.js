/* eslint-disable no-undef */
const Tasklist = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const mcom = (index) => {
    all[index].completed = true;
  };

  let thisd = new Date().toLocaleDateString("en-CA");
  // let thisd = new Date().toISOString().split("T")[0];

  const late = () => {
    return all.filter((todo) => {
      return todo.dueDate < thisd;
    });
  };

  const pend = () => {
    return all.filter((todo) => {
      return todo.dueDate === thisd;
    });
  };

  const pendl = () => {
    return all.filter((todo) => {
      return todo.dueDate > thisd;
    });
  };

  const showl = (list) => {
    return list
      .map((todo) => {
        display_status = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == thisd ? "" : todo.dueDate;

        return `${display_status} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    mcom,
    late,
    pend,
    pendl,
    showl,
  };
};

module.exports = Tasklist;

