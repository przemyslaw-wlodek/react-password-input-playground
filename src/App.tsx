import reactLogo from './assets/react.svg';
import './App.css';
import { PasswordStateless } from './components/PasswordStateless.tsx';
import { PasswordStateful } from './components/PasswordStateful.tsx';
import { useCallback, useEffect, useState } from 'react';
import { PasswordStatefulMemoizedCallback } from './components/PasswordStatefulMemoizedCallback.tsx';
import { PasswordStatefulMemoizedComponent } from './components/PasswordStatefulMemoizedComponent.tsx';
import { PasswordStatefulControlledComponent } from './components/PasswordStatefulControlledComponent.tsx';

const Header = () => (
  <>
    <div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Password</h1>
  </>
);

const testIds = {
  PasswordStateless: 'PasswordStateless',
  PasswordStateful: 'PasswordStateful',
  PasswordStatefulMemoizedCallback: 'PasswordStatefulMemoizedCallback',
  PasswordStatefulMemoizedComponent: 'PasswordStatefulMemoizedComponent',
  PasswordStatefulControlledMemoizedComponent: 'PasswordStatefulControlledMemoizedComponent',
} as const;

type PasswordComponentName = keyof typeof testIds;

const refs: Record<PasswordComponentName, null | HTMLInputElement> = {
  PasswordStateless: null,
  PasswordStateful: null,
  PasswordStatefulMemoizedCallback: null,
  PasswordStatefulMemoizedComponent: null,
  PasswordStatefulControlledMemoizedComponent: null,
} as const;

const App = () => {
  const [mountPasswordComponents, setMountPasswordComponents] = useState(true);
  const [renders, setRenders] = useState(0);
  const [password, setPassword] = useState('');
  const handleTogglePasswordComponents = useCallback(() => {
    setMountPasswordComponents((prevState) => !prevState);
  }, [setMountPasswordComponents]);

  // store refs "manually", without using React APIs so they're referencing also detached DOM nodes
  useEffect(() => {
    Object.keys(testIds).forEach((componentName) => {
      refs[componentName as PasswordComponentName] = document.querySelector(`[data-testid="${componentName}"]`)!;
    });
    console.debug(`Successfully assigned refs!`, refs);
  }, []);

  const handleClearPasswords = () => {
    Object.keys(refs).forEach((refKey) => {
      const ref = refs[refKey as PasswordComponentName];
      if (ref) {
        console.debug(`Clearing "${refKey}"...`);
        ref.value = '';

        // clear the reference
        refs[refKey as PasswordComponentName] = null;
      }
    });

    if (password) {
      console.debug(`Clearing local useState value passed to PasswordStatefulControlledComponent...`);
      setPassword('');
    }
  };

  return (
    <>
      <Header />

      <button onClick={() => setRenders((currentRenders) => currentRenders + 1)}>
        Force re-render {renders > 0 && `(${renders})`}
      </button>
      <button onClick={handleTogglePasswordComponents}>Toggle mounting password components</button>
      <button onClick={handleClearPasswords}>Clear passwords (by refs and state)</button>

      {mountPasswordComponents && (
        <>
          <PasswordStateless testId={testIds.PasswordStateless} />
          <PasswordStateful testId={testIds.PasswordStateful} />
          <PasswordStatefulMemoizedCallback testId={testIds.PasswordStatefulMemoizedCallback} />
          <PasswordStatefulMemoizedComponent testId={testIds.PasswordStatefulMemoizedComponent} />
          <PasswordStatefulControlledComponent
            testId={testIds.PasswordStatefulControlledMemoizedComponent}
            password={password}
            setPassword={setPassword}
          />
        </>
      )}
    </>
  );
};

export default App;
