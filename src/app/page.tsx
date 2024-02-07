import Todo from "@/components/todo";

export default function Home() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Test" info="Hello Test!"/>
      <Todo/>
    </div>
  );
}
