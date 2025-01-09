import Button from "./components/Button";
function App() {
  return (
    <div>
      <Button
        onClick={() => {
          console.log("hello Mohamed");
        }}
      >
        Click Me
      </Button>
    </div>
  );
}

export default App;
