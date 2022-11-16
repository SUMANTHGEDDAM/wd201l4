/* eslint-disable no-undef */
const Tasklist = require("../todo");
let thisd = new Date().toLocaleDateString("en-CA");

const { all, mcom, add, late, pend, pendl } = Tasklist();

describe("Examing of Todo's list", () => {
  beforeAll(() => {
    add({
      title: "Time is precious",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Todo is being added", () => {
    // expect(all.length).toBe(0);
    let length = all.length;

    add({
      title: "Code daily to be fluent",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("Todo is accomplished", () => {
    expect(all[0].completed).toBe(false);
    mcom(0);
    expect(all[0].completed).toBe(true);
  });

  test("Getting back every late Todo", () => {
    let tset = late();

    expect(
      tset.every((todo) => {
        return todo.dueDate < thisd;
      })
    ).toBe(true);
  });

  test("Getting back Todo which are late to this day", () => {
    let tset = pend();

    expect(
      tset.every((todo) => {
        return todo.dueDate === thisd;
      })
    ).toBe(true);
  });

  test("Getting back every Todo which are late for next", () => {
    let tset = pendl();

    expect(
      tset.every((todo) => {
        return todo.dueDate > thisd;
      })
    ).toBe(true);
  });
});
