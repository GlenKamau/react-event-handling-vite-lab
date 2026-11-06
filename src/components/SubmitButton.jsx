function SubmitButton() {
  function handleEnter() {
    console.log("Mouse Entering");
  }
  function handleLeave() {
    console.log("Mouse Exiting");
  }

  return (
    <div>
      <button type="submit" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        Submit Password
      </button>
    </div>
  );
}

export default SubmitButton;