"use client";

import AuthHeader from "@/components/Form/Auth/AuthHeader";
import AuthWrapper from "@/components/Form/Auth/AuthWrapper";
import TextInput from "@/components/Form/TextInput";
import TextInputType from "@/components/Form/Enums/TextInputType";
import Button from "@/components/Form/Button";
import { useState } from "react";
import LoginDTO from "@/components/Form/Auth/Interfaces/LoginDTO";
import login from "@/api/auth/login";

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginDTO>({
    login: null,
    password: null,
  });

  const tryToLogin = async () => {
    const result = await login(formData);
  };

  const setLogin = (e: any) => {
    setFormData({
      login: e.target.value,
      password: formData.password,
    });
  };

  const setPassword = (e: any) => {
    setFormData({
      login: formData.login,
      password: e.target.value,
    });
  };

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  return (
    <AuthWrapper>
      <AuthHeader title="Вход в панель" />
      <div className="pt-5 flex flex-col gap-5">
        <TextInput
          label="Введите логин"
          placeholder="Логин"
          required
          onKeyUp={setLogin}
          id="login"
        />
        <TextInput
          label="Введите пароль"
          placeholder="Пароль"
          required
          onKeyUp={setPassword}
          type={TextInputType.Password}
          id="login"
        />
        <Button text="Войти" onClick={tryToLogin} />
      </div>
    </AuthWrapper>
  );
};

export default LoginForm;
