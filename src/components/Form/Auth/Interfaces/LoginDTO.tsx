/**
 * DTO для передачи данных авторизации на сервер
 */
export default interface LoginDTO {
  login: string | null;
  password: string | null;
}
