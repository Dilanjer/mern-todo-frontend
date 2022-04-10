import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

import validtation from 'validations/authValidation';
import { login } from 'store/slices/UserSlice';
import TextField from 'components/TextField';
import Button from 'components/Button';
import Spiner from 'components/Spiner';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onChange',
  });
  const onSubmit = (data) => dispatch(login(data));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='bg-white drop-shadow-lg max-w-sm m-2 p-5 w-full space-y-10 rounded'>
      <div>
        <h2 className='text-center font-bold text-2xl mb-2'>
          Sing In your account
        </h2>
        <div className='text-center text-md'>
          <span>Create your account? </span>
          <Link className='text-primary-500 underline' to={'/registration'}>
            Sign Up
          </Link>
        </div>
      </div>

      <div className='space-y-3'>
        <TextField
          disabled={isSubmitting}
          label='Enter your email'
          id={'email'}
          type={'email'}
          register={register('email', validtation.email)}
          placeholder={'Enter your email.'}
          error={errors.email}
          fullWidth
        />
        <TextField
          disabled={isSubmitting}
          label='Enter your password'
          id={'password'}
          type='password'
          register={register('password', validtation.password)}
          placeholder={'Enter your password.'}
          error={errors.password}
          fullWidth
        />
      </div>
      <Button
        disabled={isSubmitting}
        type='submit'
        className={'py-4 text-lg'}
        fullWidth>
        {isSubmitting && <Spiner size='xs' />}
        Sign In
      </Button>
    </form>
  );
};
