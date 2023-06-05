import React from 'react';

import { useAuth } from '@/auth/hooks/useAuth';
import { Input } from '@/common/components/Input';
import { Spinner } from '@/common/components/Spinner';

export const AuthForm: React.FC = () => {
  const { form, isSignUp, isLoading, switchFormType, submit } = useAuth();

  return (
    <div className="w-80 p-8 bg-white rounded shadow-md dark:shadow-amber-50">
      <form onSubmit={submit}>
        <div className="text-center text-gray-700 text-xl font-bold mb-4">
          {isSignUp ? 'Регистрация' : 'Вход'}
        </div>

        <Input
          id={'username'}
          type={'email'}
          placeholder={'example@example.com'}
          value={form.email}
          required={true}
          onInput={(e) => form.setEmail(e.currentTarget.value)}
        >
          Почта
        </Input>

        <Input
          id={'password'}
          className={isSignUp ? '' : 'mb-6'}
          type={'password'}
          placeholder={'****************'}
          value={form.password}
          required={true}
          onInput={(e) => form.setPassword(e.currentTarget.value)}
        >
          Пароль
        </Input>

        {isSignUp && (
          <>
            <Input
              id={'name'}
              placeholder={'Иванов Пётр | СуперМэн'}
              required={true}
              value={form.fullName}
              onInput={(e) => form.setFullName(e.currentTarget.value)}
            >
              Имя
            </Input>

            <Input
              id={'avatar'}
              className={'mb-6'}
              placeholder={'https://example.com/avatar.jpg'}
              value={form.avatarUrl}
              onInput={(e) => form.setAvatarUrl(e.currentTarget.value)}
            >
              Аватарка (ссылка)
            </Input>
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
