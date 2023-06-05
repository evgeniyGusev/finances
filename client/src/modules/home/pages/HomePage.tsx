import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import toast from '@/common/components/toast';
import { IUser } from '@/home/interfaces';
import { getUser } from '@/home/services';

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

  return (
    <div>
      <pre>{user?.email || 'sss'}</pre>
    </div>
  );
};
