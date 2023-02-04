import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAdmin } from "../stores/action/userAction";

function RegisterPage() {
  const dispatch = useDispatch();
  const form = {
    username: "",
    password: "",
    email: "",
    address: "",
    phoneNumber: "",
  };
  const [input, setInput] = useState(form);

  const handlerForm = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(createAdmin(input));
    setInput(form);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
              <div>
                <label
                  for="username"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Enter your username.."
                  required
                  value={inputForm.username}
                  onChange={inputFormHandler}
                  name="username"
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Enter email address.."
                  required
                  value={inputForm.email}
                  onChange={inputFormHandler}
                  name="email"
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                  value={inputForm.password}
                  onChange={inputFormHandler}
                  name="password"
                />
              </div>
              <div>
                <label
                  for="phoneNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  placeholder="Enter phone number..."
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                  value={inputForm.phoneNumber}
                  onChange={inputFormHandler}
                  name="phoneNumber"
                />
              </div>

              <div>
                <label
                  for="desxription"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Address
                </label>
                <textarea
                  cols="20"
                  rows="2"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  value={inputForm.address}
                  onChange={inputFormHandler}
                  name="address"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-orange-500 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              >
                Sign up
              </button>
              <button
                className="bg-orange-500 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                onClick={() => setInputForm(defaultForm)}
              >
                Canel
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
