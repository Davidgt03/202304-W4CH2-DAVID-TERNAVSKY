export function FormPersonal() {
  return (
    <>
      <form aria-label="form">
        <div>
          <label htmlFor="username">Name</label>
          <input type="text" name="username" id="username" required />
        </div>
        <div>
          <label htmlFor="password">Last Name</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div>
          <label htmlFor="password">Birthday</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div>
          <label htmlFor="account">Gender</label>

          <select name="account" id="account">
            <option value="">--Please choose an option--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <button type="submit">Next</button>
      </form>
    </>
  );
}
