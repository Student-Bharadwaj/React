function doSomething(event) {
 console.log("clicked!");
 console.log(event);
}

export default function Button() {
  return (
    <div>
      <button  onClick={doSomething}>Click Me!</button>
    </div>
  );
}
