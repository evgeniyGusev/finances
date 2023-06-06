import React, { PropsWithChildren } from 'react';

import { ReactComponent as PencilIcon } from '@/common/icons/pencil.svg';
import { ReactComponent as LogOutIcon } from '@/common/icons/logout.svg';
import { IProfileInfoProps } from '@/profile/interfaces';

export const ProfileInfo: React.FC<PropsWithChildren<IProfileInfoProps>> = ({
  email,
  fullName,
  avatarUrl,
}) => {
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="flex items-end mb-4">
        <button
          type="button"
          title="Редактировать профиль"
          className="hover:scale-125"
        >
          <PencilIcon className="w-4 h-4 dark:fill-amber-50" />
        </button>
        <img
          src={avatarUrl}
          alt={fullName}
          className="w-32 h-32 rounded-full"
        />
        <button type="button" title="Выйти" className="hover:scale-125">
          <LogOutIcon className="w-4 h-4 dark:fill-amber-50" />
        </button>
      </div>

      <div className="text-3xl font-bold mb-2">{fullName}</div>
      <div className="text-sm font-thin dark:text-neutral-100 italic">
        {email}
      </div>
    </div>
  );
};
