import React, { useState } from "react";
import vector from "./../assets/Vector.png";

const LoginPage = () => {
  const [FormData, setformData] = useState({
    email: "",
    password: "",
  });
  function changeHandler(event) {
    setformData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="w-full h-full flex justify-center items-center mt-11">
      <div className="w-[500px] max-h-fit bg-gray-100 p-6 ">
        <div className="w-full flex justify-end">
          <div className="bg-white rounded-md w-[30px] h-[30px]  flex justify-center items-center relative ">
            <img src={vector} alt=""  className="absolute"/>
            <img src={vector} alt="" className="absolute " />
          </div>
        </div>

        <h1 className="text-left ml-2 p-3 text-[24px]">Войти в систему</h1>
        <form
          onSubmit={submitHandler}
          className="flex flex-col w-full gap-y-4 mt-6"
        >
          <label htmlFor="email">
            <input
              className="bg-blue-100 rounded-[0.5rem] w-[452px] p-[12px]  leading-[1.375rem] text-blue-600 placeholder-blue-400"
              type="email"
              required
              name="email"
              id="email"
              placeholder="Email/Телефон"
              onChange={changeHandler}
              value={FormData.email}
            />
          </label>
          <label htmlFor="password">
            <input
              className="bg-blue-100 rounded-[0.5rem]  text-blue-600 w-[452px] p-[12px] leading-[1.375rem] placeholder-blue-400"
              required
              onChange={changeHandler}
              type="text"
              name="password"
              placeholder="Пароль"
              id="password"
              value={FormData.password}
            ></input>
          </label>

          <div className="flex justify-start gap-2 items-center">
            <input
              type="checkbox"
              name="checking"
              id=""
              className="border-black"
            />
            <p className="text-[15px]">Запомнить пароль</p>
          </div>
          <p className="text-blue-600 text-[20px] text-left">Восстановить</p>
          <div className="flex flex-col gap-4">
            <button
              className="w-[452px] h-[55px] bg-blue-500 p-[10px] rounded-[3px] font-medium text-white
                 "
            >
              К Войти
            </button>
            <button className="w-[452px] h-[55px] bg-white border-blue-500 border-2 p-[10px] rounded-[3px] font-medium text-blue-500">
              К решениям
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
