import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signIn, signUp } from '@/auth/services';

export const useAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = {
    email,
    setEmail,
    password,
    setPassword,
    fullName,
    setFullName,
    avatarUrl,
    setAvatarUrl,
  };

  const navigate = useNavigate();

  const clearForm = () => {
    [setEmail, setPassword, setAvatarUrl, setFullName].forEach((hook) =>
      hook(''),
    );
  };

  const login = async () => {
    setIsLoading(true);

    const result = await signIn({ email, password });

    setIsLoading(false);
    if (result.access) {
      navigate('/');
    } else {
      alert('error' in result && result.error);
    }
  };

  const register = async () => {
    setIsLoading(true);

    const result = await signUp({ email, password, fullName, avatarUrl });

    if (result.success) {
      clearForm();
      setEmail(result.user.email);

      setIsSignUp(false);

      const passwordField: HTMLElement | null =
        document.getElementById('password');

      if (passwordField) {
        passwordField.focus();
      }
    } else {
      alert('error' in result && result.error);
    }

    setIsLoading(false);
  };

  const switchFormType = () => {
    clearForm();
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

  return {
    form,
    isSignUp,
    isLoading,
    switchFormType,
    submit,
  };
};
