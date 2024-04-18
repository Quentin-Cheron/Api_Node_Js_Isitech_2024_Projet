let todos = [];

const getAllTodo = (req, res) => {
  res.send(todos);
};

const create = (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.send(todo);
};

const getByIdTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    res.status(404).send();
  } else {
    res.send(todo);
  }
};

const updateTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    res.status(404).send();
  } else {
    const newTodo = req.body;
    todos = todos.map((t) => (t.id === id ? newTodo : t));
    res.send(newTodo);
  }
};

const deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((t) => t.id !== id);
  res.status(204).send();
};

export default {
  getAll: getAllTodo,
  create: create,
  getById: getByIdTodo,
  update: updateTodo,
  delete: deleteTodo,
};
