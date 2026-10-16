import {useState} from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          action=""
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Your email"
            required
            className="text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full py-4 px-5 text-xl placeholder:text-gray-400 mb-4"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Your Password"
            required
            className="text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full py-4 px-5 text-xl placeholder:text-gray-400 mb-4"
          />
          <button className="text-white outline-none bg-emerald-600 rounded-4xl py-4 px-5 text-xl ">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
