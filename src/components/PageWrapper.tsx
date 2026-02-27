import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  pageNumber: number;
  totalPages: number;
}

export const PageWrapper = ({ children, pageNumber, totalPages }: Props) => {
  return (
    <div className="page-view relative w-[8.5in] h-[11in] bg-white flex overflow-hidden">
      {children}

      {/* Visual Page Number (Visible on screen and print) */}
      <div className="page-footer">
        Page {pageNumber} of {totalPages}
      </div>
    </div>
  );
};