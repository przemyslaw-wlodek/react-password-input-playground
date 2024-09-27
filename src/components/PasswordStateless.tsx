import { PasswordProps } from './types.ts';

export const PasswordStateless = ({ testId }: PasswordProps) => {
  return (
    <>
      <h2>Stateless:</h2>
      <input data-testid={testId} type="password" />
    </>
  );
};
