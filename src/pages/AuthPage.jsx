import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from 'modules/Auth/LoginForm';
import { RegisterForm } from 'modules/Auth/RegisterForm';

const AuthPage = () => {
  return (
    <section className='h-screen flex flex-wrap items-center justify-center '>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='login' element={<LoginForm />} />
        <Route path='registration' element={<RegisterForm />} />
        <Route path='*' element={<Navigate to={'/login'} replace />} />
      </Routes>
    </section>
  );
};

export default AuthPage;
