import React, { PropsWithChildren } from 'react';

import { IUser } from '@/home/interfaces';
import { ProfileInfo } from '@/profile/components/ProfileInfo';
import { WalletBudge } from '@/wallet/components/WalletBudge';

export const Profile: React.FC<PropsWithChildren<{ user: IUser | null }>> = ({
  user,
}) => {
  const { email = '', fullName = '', avatarUrl = '' } = user || {};

  return (
    <main className="container mx-auto px-4 mt-16">
      <ProfileInfo email={email} fullName={fullName} avatarUrl={avatarUrl} />

      <section className="container mx-auto px-4 mt-16 flex">
        <div className="flex flex-col">
          <WalletBudge />
          <WalletBudge />
          <WalletBudge />
        </div>
      </section>
    </main>
  );
};
