import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { HiUserCircle } from "react-icons/hi";

const NavBar = () => {
  const {user , logOut} = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
        .then(() => console.log('user Logged Out'))
        .catch(error => {
            console.log(error);
        })
    }
  const navOptions = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>

      <li>
        <NavLink to='/contact'>Contact</NavLink>
      </li>
      <li>
        <NavLink to='/signup'>SignUp</NavLink>
      </li>
      <li>
        <NavLink to='/signin'>SignIn</NavLink>
      </li>
     
     
       <div>
      <div>
          {user ? (
            <Link to="/dashboard/profile" className="avatar">
              <div className="w-12 rounded-full">
                <img src={user.photoURL} />
              </div>
            </Link>
          ) : (
            <Link to={"/signin"} className="avatar">
              <div className="w-12 rounded-full overflow-hidden">
                <HiUserCircle className="text-5xl" />
              </div>
            </Link>
          )}
        </div>
        <Link
          to={user ? "/dashboard/todo" : "/signin"}
          className="px-10  py-2 font-bold border rounded-md"
        >
          Task
        </Link>
      </div>
      
    
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">PH Tasks</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
      {
            user ? <>
            <div className="avatar  mr-2">
              <div className="w-24 rounded">
                <img src={user.photoURL} />
              </div>
            </div>
            <span>{user.displayName}</span>
            <a onClick={handleLogOut} className="btn btn-primary ml-2">Sign Out</a>
            </>
            :
            <Link to='/signin'>
                 <button  className="btn btn-primary ">Sign In</button>
            </Link>
        }
      </div>
    </div>
  );
};

export default NavBar;
