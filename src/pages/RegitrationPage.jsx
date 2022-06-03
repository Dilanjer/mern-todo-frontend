import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import React from 'react';

import { registration } from 'store/slices/UserSlice';
import validtation from 'validations/authValidation';
import TextField from 'UI/TextField';
import Spiner from 'UI/Spiner';
import Box from 'UI/layouts/Box';
import Typography from 'UI/Typography';
import Section from 'UI/layouts/Section';
import { RegistrationSuccessPage } from 'pages/RegistrationSuccessPage';
import Button from 'UI/Button';

export const RegistrationPage = () => {
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

  const passwordsIsMatch = (value) => {
    return value === getValues('password') || 'Your passwords is noth match.';
  };

  React.useEffect(() => {
    validtation.setConfirmPassowrdValidateParam(passwordsIsMatch);
  }, []);

  const onSubmit = (data) => dispatch(registration(data));
  const isRegistrationSuccess = user.status !== 'success';

  return isRegistrationSuccess ? (
    <Section delay={0.3} className={'flex mt-16 md:mt-24 justify-center'}>
      <Box
        as='form'
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-sm p-5 m-2 space-y-6 bg-white rounded drop-shadow-lg'>
        <div>
          <Typography size={'2xl'} className={'text-center mb-1'} as={'h1'}>
            Create your account
          </Typography>
          <div className='text-center text-md'>
            <Typography as={'span'}>Already have account? </Typography>
            <Link className='underline text-primary-500' to={'/login'}>
              Sign In
            </Link>
          </div>
        </div>
        <div className='space-y-1.5'>
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
          variant={'contained'}
          disabled={isSubmitting}
          type='submit'
          className={'py-4 text-lg'}
          fullWidth>
          {isSubmitting && <Spiner size='xs' />}
          Sign Up
        </Button>
      </Box>
    </Section>
  ) : (
    <RegistrationSuccessPage userEmail={getValues('email')} />
  );
};
