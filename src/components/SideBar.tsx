import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const SideBar = ({ children }: Props) => {
  return (
    <aside className="w-full h-full bg-slate-100 p-4 flex flex-col gap-6">
      {children}
    </aside>
  );
};