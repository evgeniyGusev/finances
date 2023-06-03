import { useAuth } from '@/auth/hooks/useAuth';
import { Spinner } from '@/common/components/Spinner';

export const AuthForm = () => {
  const { form, isSignUp, isLoading, switchFormType, submit } = useAuth();

  return (
    <div className="w-80 p-8 bg-white rounded shadow-md dark:shadow-amber-50">
      <form onSubmit={submit}>
        <div className="text-center text-gray-700 text-xl font-bold mb-4">
          {isSignUp ? 'Регистрация' : 'Вход'}
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
            className="shadow-md border border-solid border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-blue-500/50"
            type="email"
            placeholder="example@example.com"
            value={form.email}
            onInput={(e) => form.setEmail(e.currentTarget.value)}
          />
        </div>
        <div className={`${isSignUp ? 'mb-4' : 'mb-6'}`}>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Пароль
          </label>
          <input
            id="password"
            className="shadow-md border border-solid border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-blue-500/50"
            type="password"
            placeholder="****************"
            value={form.password}
            onInput={(e) => form.setPassword(e.currentTarget.value)}
          />
        </div>

        {isSignUp && (
          <>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Имя
              </label>
              <input
                id="name"
                className="shadow-md border border-solid border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-blue-500/50"
                type="text"
                placeholder="Иванов Пётр | СуперМэн"
                value={form.fullName}
                onInput={(e) => form.setFullName(e.currentTarget.value)}
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="avatar"
              >
                Аватарка (ссылка)
              </label>
              <input
                id="avatar"
                className="shadow-md border border-solid border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-blue-500/50"
                type="text"
                placeholder="https://example.com/avatar.jpg"
                value={form.avatarUrl}
                onInput={(e) => form.setAvatarUrl(e.currentTarget.value)}
              />
            </div>
          </>
        )}

        <div
          className={`flex items-center justify-between ${
            isSignUp ? 'flex-col' : ''
          }`}
        >
          <button
            className={`flex justify-center items-center h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed ${
              isSignUp ? 'mb-3 w-3/4' : 'w-20'
            }`}
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? (
              <Spinner />
            ) : isSignUp ? (
              'Зарегистрироваться'
            ) : (
              'Войти'
            )}
            {/*<Spinner />*/}
          </button>
          <button
            className="font-bold text-sm text-blue-500 hover:text-blue-800"
            type="button"
            onClick={switchFormType}
          >
            {isSignUp ? 'Уже есть аккаунт' : 'Создать аккаунт'}
          </button>
        </div>
      </form>
    </div>
  );
};
