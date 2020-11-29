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
      <div>
        <h1 className='heading_login'> Register </h1>
        <p className='paragraph_login'>Sign up for our app here</p>
      </div>
      <form onSubmit={logEverything}>
        <div className='box_input'>
          <input
              id='first_name'
              type='text'
              placeholder='First name *'
              className='inputs_main'
              required
              onChange={e => {
                firstName = e.target.value;
              }}
          />
          <input
              id='last_name'
              type='text'
              placeholder='Last name *'
              className='inputs_main'
              required
              onChange={e => (lastName = e.target.value)}
          />
          <input
              type='email'
              id='email'
              placeholder='Email *'
              className='inputs_main'
              required
              onChange={e => {
                email = e.target.value;
              }}
          />
          <input
              id='password'
              type='password'
              placeholder='Password *'
              className='inputs_main'
              required
              onChange={e => {
                password = e.target.value;
              }}
          />
          <input
              id='repeat_password'
              type='password'
              placeholder='Repeat Password *'
              className='inputs_main'
              required
              onChange={e => {
                repeatPassword = e.target.value;
              }}
          />
          <input
              id='companyId'
              type='text'
              placeholder='Comapny Id *'
              className='inputs_main'
              required
              onChange={e => {
                companyId = e.target.value;
              }}
          />
        </div>
        <button type='submit' className='primary_btn_black'>Submit</button>
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
