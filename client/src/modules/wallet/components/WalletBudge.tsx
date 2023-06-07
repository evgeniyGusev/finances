import React from 'react';

import { ReactComponent as EditIcon } from '@/common/icons/edit.svg';

export const WalletBudge: React.FC = () => {
  return (
    <button className="bg-white mw-36 mb-4 rounded-lg relative flex">
      <div className="h-full flex items-center px-2 font-bold text-xl bg-green-500">
        ₽
      </div>

      <div className="flex flex-col items-start px-3 py-2">
        <div className="text-zinc-900">Кредитка сбер Лена</div>
        <div className="text-zinc-900 font-bold">
          {new Intl.NumberFormat('ru-RU').format(1523455)}
        </div>
      </div>

      <div className="absolute right-1 bottom-1">
        <EditIcon className="w-4 h-4 hover:fill-blue-950 hover:scale-110" />
      </div>
    </button>
  );
};
