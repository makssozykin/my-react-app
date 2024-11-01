import { useId } from 'react';

const LoginForm = ({ children, onLogin }) => {
  const loginId = useId();
  const passwordId = useId();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    console.log(form.elements);
    const { login, password, coffeeSize } = form.elements;
    onLogin({
      login: login.value,
      password: password.value,
      coffeeSize: coffeeSize.value,
    });
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Login:</label>
      <input type="text" name="login" id={loginId} />
      <label htmlFor={passwordId}>Password:</label>
      <input type="password" name="password" id={passwordId} />
      {children}
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
