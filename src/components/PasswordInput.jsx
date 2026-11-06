// Code PasswordInput Component Here

function PasswordInput() {
    function handleChange() {
        console.log("Entering password...");
    }
  return (
    <div>
      <input type="password" name="password" onChange={handleChange} />
    </div>
  );
}

export default PasswordInput;
