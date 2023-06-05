import React, { PropsWithChildren } from 'react';

import { IUser } from '@/home/interfaces';
import { ProfileInfo } from '@/profile/components/ProfileInfo';

export const Profile: React.FC<PropsWithChildren<{ user: IUser | null }>> = ({
  user,
}) => {
  const { email = '', fullName = '', avatarUrl = '' } = user || {};

  return (
    <div className="container mx-auto px-4 mt-16">
      <ProfileInfo email={email} fullName={fullName} avatarUrl={avatarUrl} />
    </div>
  );
};
