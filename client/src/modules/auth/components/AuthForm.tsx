import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signIn, signUp } from '@/auth/services';

export const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [fullName, setFullName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  const navigate = useNavigate();

  const login = async () => {
    const result = await signIn({ email, password });

    if (result.access) {
      navigate('/');
    } else {
      alert('error' in result && result.error);
    }
  };

  const register = async () => {
    const result = await signUp({ email, password, fullName, avatarUrl });

    if (result.success) {
      console.log('TUTTUTUT');
      setEmail(result.user.email);
      setPassword('');
      setFullName('');
      setAvatarUrl('');

      setIsSignUp(false);

      //TODO: Сделать фокус на пароль
    } else {
      alert('error' in result && result.error);
    }
  };

  const switchFormType = () => {
    setEmail('');
    setPassword('');
    setFullName('');
    setAvatarUrl('');
    setIsSignUp(!isSignUp);
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSignUp) {
      await register();
    } else {
      await login();
    }
  };

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
            value={email}
            onInput={(e) => setEmail(e.currentTarget.value)}
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
            value={password}
            onInput={(e) => setPassword(e.currentTarget.value)}
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
                value={fullName}
                onInput={(e) => setFullName(e.currentTarget.value)}
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
                value={avatarUrl}
                onInput={(e) => setAvatarUrl(e.currentTarget.value)}
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
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isSignUp ? 'mb-3' : ''
            }`}
            type="submit"
          >
            {isSignUp ? 'Зарегистрироваться' : 'Войти'}
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
