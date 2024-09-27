import { PasswordProps } from './types.ts';

type PasswordControlledMemoizedComponentProps = PasswordProps & {
  password: string;
  setPassword: (password: string) => void;
};

export const PasswordStatefulControlledComponent = ({
  testId,
  setPassword,
  password,
}: PasswordControlledMemoizedComponentProps) => (
  <>
    <h2>Stateful and controlled component:</h2>
    <input data-testid={testId} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  </>
);
