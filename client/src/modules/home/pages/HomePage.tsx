import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Spinner } from '@/common/components/Spinner';
import toast from '@/common/components/toast';
import { IUser } from '@/home/interfaces';
import { getUser } from '@/home/services';
import { Profile } from '@/profile/components/Profile';
import { Header } from '@/home/components/Header';

export const HomePage: React.FC = () => {
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const redirectToAuth = () => {
    navigate('/auth');
    toast.error('Требуется авторизация');
  };

  useEffect(() => {
    getUser()
      .then((data) => {
        if (!data.access) {
          redirectToAuth();
        } else {
          setUser(data.user);
        }
      })
      .catch(() => {
        redirectToAuth();
      });
  }, []);

  if (user) {
    return (
      <>
        <Header />
        <Profile user={user} />
      </>
    );
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Spinner size="large" />
      <div className="text-sm text-gray-500 flex justify-center items-center mt-4">
        Загружаем профиль... 😎
      </div>
    </div>
  );
};
