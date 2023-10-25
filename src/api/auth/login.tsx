import LoginDTO from "@/components/Form/Auth/Interfaces/LoginDTO";

/**
 * Отправляет запрос с просьбой залогиниться на сервер
 *
 * @param {LoginDTO} dto
 */
export default async function login(dto: LoginDTO): Promise<boolean> {
  const data = new FormData();
  if (dto.login) {
    data.append("login", dto.login);
  }
  if (dto.password) {
    data.append("password", dto.password);
  }

  // Отправка запроса на сервер
  const response = await fetch("http://api.studytime.test/auth/login/", {
    method: "POST",
    body: data,
  });
  if (!response.ok) {
    throw new Error("Undefined API error!");
  }

  // Обработка полученных данных
  const json = await response.json();

  return json.success;
}
