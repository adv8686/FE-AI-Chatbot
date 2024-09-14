import { ReactNode } from 'react';

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className='bg-white rounded-lg border-1 border-solid p-6  border-neutral-01'>
      {children}
    </div>
  );
};
export default Card;
