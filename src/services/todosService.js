import todosMock from "../mock/todos";

const TodoService = () => {
  const getTodos = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(todosMock);
      }, 1500);
    });
  };
  return { getTodos };
};

const todoService = TodoService();

export default todoService;


/*Esto hace una simulacion de una llamada http, pero solo hace una promesa
que trae datos en 1.5sec */