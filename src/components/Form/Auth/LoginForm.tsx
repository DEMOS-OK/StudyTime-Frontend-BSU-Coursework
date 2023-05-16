import AuthHeader from "@/components/Form/Auth/AuthHeader";
import AuthWrapper from "@/components/Form/Auth/AuthWrapper";
import TextInput from "@/components/Form/TextInput";
import TextInputType from "@/components/Form/Enums/TextInputType";
import Button from "@/components/Form/Button";

const LoginForm = () => {
  return (
    <AuthWrapper>
      <AuthHeader title="Вход в панель" />
      <div className="pt-5 flex flex-col gap-5">
        <TextInput
          label="Введите логин"
          placeholder="Логин"
          required
          id="login"
        />
        <TextInput
          label="Введите пароль"
          placeholder="Пароль"
          required
          type={TextInputType.Password}
          id="login"
        />
        <Button text="Войти" />
      </div>
    </AuthWrapper>
  );
};

export default LoginForm;
