import Todo from "@/components/todo";

export default function Home() {
  const todos = [
    {title:"Test", info:"Test info!"},
    {title:"Hello", info:"Hello info!"},
  ]
  return (
    <div>
      <h1>My Todos</h1>
      {todos.map(x=> <Todo title={x.title} info={x.info}/>)}
    </div>
  );
}
