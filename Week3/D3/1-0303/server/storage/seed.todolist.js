const path = require('path');
const fs = require('fs/promises');

const todoList = [];
for (let i = 0; i < 10; i++) {
    let priority = i % 3 === 0
        ? "Low"
        : i % 3 === 1
            ? "Normal"
            : "High"
    let status = i % 2 === 0    
        ? "In Progress"
        : "Complete"

    const todoItem = {
        title: `Todo Item #${i}`,
        description: `Description #${i}`,
        status,
        priority
    };
    todoList.push(todoItem);
}

console.log("\x1b[46m%s\x1b[0m", "Running 'seed.js'");
(async function createTodoList() {
  try {
    const filePath = path.join(__dirname, '/../todo', '/todolist.json');
    await fs.writeFile(filePath, JSON.stringify(todoList, null, 2));
  } catch (e) {
    console.error(e);
  }
})();
console.log("\x1b[46m%s\x1b[0m", "Finished 'seed.todolist.js'");

