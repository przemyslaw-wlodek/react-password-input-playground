import { PasswordProps } from './types.ts';
import React, { useState } from 'react';

export const PasswordStatefulMemoizedComponent = React.memo(({ testId }: PasswordProps) => {
  const [password, setPassword] = useState('');

  return (
    <>
      <h2>Stateful (memoized component):</h2>
      <input data-testid={testId} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </>
  );
});
