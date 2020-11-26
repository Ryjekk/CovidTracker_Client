import './Register.css';

const Register = () => {
  //does this need to be states?
  let firstName;
  let lastName;
  let email;
  let password;
  let repeatPassword;
  let companyId;

  const logEverything = e => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      password,
      repeatPassword,
      companyId
    );
  };

  const sendToDb = () => {
    //axios.post ..
    //this sets the session id? Id token?
    //sends back 'registered! now you can log in' or
    //there was an error registering. Try again.
  };

  return (
    <div className='register'>
      <h1> Register </h1>
      <p>Sign up for our app here</p>
      <form onSubmit={logEverything}>
        <label htmlFor='first_name'>Enter first name here:</label>
        <br />
        <input
          id='first_name'
          type='text'
          required
          onChange={e => {
            firstName = e.target.value;
          }}
        />
        <br />
        <br />
        <label htmlFor='last_name'>Enter last name here:</label>
        <br />
        <input
          id='last_name'
          type='text'
          required
          onChange={e => (lastName = e.target.value)}
        />
        <br />
        <br />
        <label htmlFor='email'>Enter email here:</label>
        <br />
        <input
          type='email'
          id='email'
          required
          onChange={e => {
            email = e.target.value;
          }}
        />
        <br />
        <br />
        <label htmlFor='password'>Enter password here:</label>
        <br />
        <input
          id='password'
          type='password'
          required
          onChange={e => {
            password = e.target.value;
          }}
        />
        <br />
        <br />
        <label htmlFor='repeat_password'>Repeat password here:</label>
        <br />
        <input
          id='repeat_password'
          type='password'
          required
          onChange={e => {
            repeatPassword = e.target.value;
          }}
        />
        <br />
        <br />
        <label htmlFor='companyId'>Enter your company id here:</label>
        <br />
        <input
          id='companyId'
          type='text'
          required
          onChange={e => {
            companyId = e.target.value;
          }}
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Register;
//what props will this form get?
//it will be a controlled component. One event listener onChange on
//each of the inputfields. What will it send?

// firstName: {
//   type: String,
//   required: true,
// },
// lastName: {
//   type: String,
//   required: true,
// },
// email: {
//   type: String,
//   required: true,
// },
// password: {
//   type: String,
//   required: true,
// },
// companyId: {
//   type: Number,
//   required: true,
// },
// visits: {
//   type: Array,
//   default: [],
// },
// inRisk: {
//   type: Boolean,
//   default: false,
// },
// },
