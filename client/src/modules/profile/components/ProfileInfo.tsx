import React, { PropsWithChildren } from 'react';

import { IProfileInfoProps } from '@/profile/interfaces';

export const ProfileInfo: React.FC<PropsWithChildren<IProfileInfoProps>> = ({
  email,
  fullName,
  avatarUrl,
}) => {
  return (
    <div className="flex flex-col justify-start items-center">
      <img
        src={avatarUrl}
        alt={fullName}
        className="w-32 h-32 rounded-full mb-4"
      />

      <div className="text-3xl font-bold mb-2">{fullName}</div>
      <div className="text-sm font-thin dark:text-neutral-100 italic">
        {email}
      </div>
    </div>
  );
};
