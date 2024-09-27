import { PasswordProps } from './types.ts';
import React, { useCallback, useState } from 'react';

export const PasswordStatefulMemoizedCallback = ({ testId }: PasswordProps) => {
  const [password, setPassword] = useState('');
  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [setPassword],
  );

  return (
    <>
      <h2>Stateful (memoized onChange):</h2>
      <input data-testid={testId} type="password" value={password} onChange={handlePasswordChange} />
    </>
  );
};
