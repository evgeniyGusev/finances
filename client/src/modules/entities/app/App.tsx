export const App = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-80 p-8 bg-white rounded shadow-md dark:shadow-amber-50">
        <form>
          <div className="text-center text-gray-700 text-xl font-bold mb-4">
            Вход
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Почта
            </label>
            <input
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-blue-500/50 focus:border-blue-300"
              type="email"
              placeholder="example@example.com"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Пароль
            </label>
            <input
              id="password"
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:outline-blue-500/50"
              type="password"
              placeholder="****************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Войти
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Создать аккаунт
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
