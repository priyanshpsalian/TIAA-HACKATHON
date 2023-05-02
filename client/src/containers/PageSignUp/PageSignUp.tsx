import React,{ useState,FC } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { Link } from "react-router-dom";
  import axios from "axios";
// import { useDispatch } from "react-redux";
// import { authActions } from "../../store";
import { useNavigate } from "react-router-dom";
export interface PageSignUpProps {
  className?: string;
}

const loginSocials = [
  {
    name: "Continue with Facebook",
    href: "#",
    icon: facebookSvg,
  },
  {
    name: "Continue with Twitter",
    href: "#",
    icon: twitterSvg,
  },
  {
    name: "Continue with Google",
    href: "#",
    icon: googleSvg,
  },
];

const PageSignUp: FC<PageSignUpProps> = ({ className = "" }) => {
  const naviagte = useNavigate();
  // const dispath = useDispatch();
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    gender: "",
    phone: "",
    age: "",
    email: "",
    password: "",
    cpassword: "",
  });
  // const [isSignup, setIsSignup] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async (type = "UserRegister") => {
    const res = await axios
      .post(`http://localhost:5000/user/UserRegister`, {
        fname: inputs.fname,
        lname: inputs.lname,
        email: inputs.email,
        password: inputs.password,
        gender: inputs.gender,
        cpassword: inputs.cpassword,
        age: inputs.age,
        phone: inputs.phone,
      })
      .catch((err) => console.log(err));
    // console.log(res);
    const data = await res;
    console.log(data, "LL");
    return data;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
    // if (isSignup) {
    sendRequest("UserRegister")
      .then((data) => console.log(data))
      // .then((data) => localStorage.setItem("userId", data))
      // .then(() => dispath(authActions.login()))
      .then(() => naviagte("/"));
    // } else {
    //   sendRequest()
    //     .then((data) => localStorage.setItem("userId", data._id))
    //     .then(() => dispath(authActions.login()))
    //     .then(() => naviagte("/blogs"));
    // }
  };
  return (
    <div className={`nc-PageSignUp  ${className}`} data-nc-id="PageSignUp">
      <Helmet>
        <title>Sign up || Booking React Template</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Signup
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
          <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                <img
                  className="flex-shrink-0"
                  src={item.icon}
                  alt={item.name}
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  {item.name}
                </h3>
              </a>
            ))}
          </div>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          <form
            className="grid grid-cols-1 gap-6"
            onSubmit={handleSubmit}
            // action="#"
            // method="post"
          >
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <Input
                name="email"
                onChange={handleChange}
                value={inputs.email}
                type="email"
                placeholder="example@example.com"
                className="mt-1"
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
              </span>
              <Input
                name="password"
                onChange={handleChange}
                value={inputs.password}
                type="password"
                className="mt-1"
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Confirm Password
              </span>
              <Input
                name="cpassword"
                onChange={handleChange}
                value={inputs.cpassword}
                type="password"
                className="mt-1"
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                gender
              </span>
              <Input
                name="gender"
                onChange={handleChange}
                value={inputs.gender}
                type="password"
                className="mt-1"
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                First Name
              </span>
              <Input
                name="fname"
                onChange={handleChange}
                value={inputs.fname}
                type="password"
                className="mt-1"
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Last Name
              </span>
              <Input
                name="lname"
                onChange={handleChange}
                value={inputs.lname}
                type="password"
                className="mt-1"
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Age
              </span>
              <Input
                name="age"
                onChange={handleChange}
                value={inputs.age}
                type="password"
                className="mt-1"
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Age
              </span>
              <Input
                name="phone"
                onChange={handleChange}
                value={inputs.phone}
                type="password"
                className="mt-1"
              />
            </label>
            <ButtonPrimary type="submit">Continue</ButtonPrimary>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Already have an account? {` `}
            <Link to="/login">Sign in</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageSignUp;
