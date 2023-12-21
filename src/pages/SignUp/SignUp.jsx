import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";


const SignUp = () => {
    const {createUser} =useContext(AuthContext);
    const navigate = useNavigate();

    const [signUpError, setSignUpError] = useState(" ");
    const [success , setSuccess] = useState('');

    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log( name ,email , password);

        if(password.length < 6){
            setSignUpError('Password should be at least 6 Characters or longer');
            return;
          }
          else if(!/[A-Z]/.test(password)){
            setSignUpError('do not have a capital letter');
            return;
          }
          else if(!/^(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?])/.test(password)){
            setSignUpError('do not have a special character');
            return;
          }
      
      
      
          setSignUpError('')

          
        // create user in firebase
        createUser(email , password)
        .then(result => {
            console.log(result.user)
            e.target.reset();
            setSuccess(swal("Good job!", "Login Successfully!", "success"));
            navigate("/");
        })
        .catch(error => {
            console.log(error)
            setSignUpError(error.message);
    }
    )
    }


    return (
        <div className="">
          
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-500 to-indigo-700">
        <div className="bg-white p-8 my-5 rounded shadow-md w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-center text-indigo-800 mb-6">Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 bg-gray-100 border border-gray-400 rounded focus:ring focus:ring-indigo-400"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 bg-gray-100 border border-gray-400 rounded focus:ring focus:ring-indigo-400"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-3 bg-gray-100 border border-gray-400 rounded focus:ring focus:ring-indigo-400"
                placeholder="Password"
              />
            </div>
            {/* <div className="mb-6">
              <label htmlFor="photoURL" className="block text-gray-600 text-sm font-medium mb-2">
                Photo URL
              </label>
              <input
                type="text"
                id="photoURL"
                name="photoURL"
                className="w-full p-3 bg-gray-100 border border-gray-400 rounded focus:ring focus:ring-indigo-400"
                placeholder="Photo URL"
              />
            </div> */}
            <button
              type="submit"
              className="w-full bg-indigo-800 text-white p-3 rounded hover:bg-indigo-900 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          {
          
          signUpError && <p className="text-red-800">{signUpError}</p>
          
          }
           {
            success && <p>{success}</p>
          }
          <p className="text-center p-2">Already Have An Account? Please<Link to='/signin'>
      <button className="btn btn-link">SignIn</button>
      </Link> </p>
        </div>
      </div>
      </div>
    );
};

export default SignUp;