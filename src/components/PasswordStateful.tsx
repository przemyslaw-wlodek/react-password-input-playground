import { PasswordProps } from './types.ts';
import { useState } from 'react';

export const PasswordStateful = ({ testId }: PasswordProps) => {
  const [password, setPassword] = useState('');

  return (
    <>
      <h2>Stateful:</h2>
      <input data-testid={testId} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </>
  );
};
