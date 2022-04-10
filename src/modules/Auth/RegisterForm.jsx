import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import React from 'react';

import { registration, resetError } from 'store/slices/UserSlice';
import validtation from 'validations/authValidation';
import { RegisterSuccess } from './RegisterSuccess';
import TextField from 'components/TextField';
import Button from 'components/Button';
import Spiner from 'components/Spiner';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onChange',
  });

  const resetUserStateError = () => {
    if (user.errors === null) return;
    return dispatch(resetError());
  };
  const passwordsIsMatch = (value) => {
    return value === getValues('password') || 'Your passwords is noth match.';
  };

  React.useEffect(() => {
    validtation.setEmailValidateParam(resetUserStateError);
    validtation.setConfirmPassowrdValidateParam(passwordsIsMatch);
  }, []);

  const onSubmit = (data) => dispatch(registration(data));
  const isRegistrationSuccess = user.status !== 'success';

  return isRegistrationSuccess ? (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='bg-white drop-shadow-lg max-w-sm m-2 p-5 w-full space-y-10 rounded'>
      <div>
        <h2 className='text-center font-bold text-2xl mb-2'>
          Create your account
        </h2>
        <div className='text-center text-md'>
          <span>Already have account? </span>
          <Link className='text-primary-500 underline' to={'/login'}>
            Sign In
          </Link>
        </div>
      </div>
      <div className='space-y-3'>
        <TextField
          disabled={isSubmitting}
          label="What's your name?"
          id={'name'}
          register={register('name', validtation.name)}
          placeholder={'Enter your name.'}
          error={errors.name}
          fullWidth
        />
        <TextField
          disabled={isSubmitting}
          label="What's your email?"
          id={'email'}
          register={register('email', validtation.email)}
          placeholder={'Enter your email.'}
          error={errors.email || user.errors}
          fullWidth
        />
        <TextField
          disabled={isSubmitting}
          label='Create a password'
          id={'password'}
          type='password'
          register={register('password', validtation.password)}
          placeholder={'Create a password.'}
          error={errors.password}
          fullWidth
        />
        <TextField
          disabled={isSubmitting}
          label='Confirm your password'
          id={'confirmPassowrd'}
          type='password'
          register={register('confirmPassowrd', validtation.confirmPassowrd)}
          placeholder={'Confirm your password.'}
          error={errors.confirmPassowrd}
          fullWidth
        />
      </div>
      <Button
        disabled={isSubmitting}
        type='submit'
        className={'py-4 text-lg'}
        fullWidth>
        {isSubmitting && <Spiner size='xs' />}
        Sign Up
      </Button>
    </form>
  ) : (
    <RegisterSuccess userEmail={getValues('email')} />
  );
};
