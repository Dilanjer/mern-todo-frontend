import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

import validtation from 'validations/authValidation';
import { login } from 'store/slices/UserSlice';
import TextField from 'UI/TextField';
import Spiner from 'UI/Spiner';
import Box from 'UI/layouts/Box';
import Typography from 'UI/Typography';
import Section from 'UI/layouts/Section';
import Button from 'UI/Button';

export const LoginPage = () => {
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
    <Section delay={0.3} className={'flex mt-16 md:mt-24 justify-center'}>
      <Box
        as='form'
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-sm p-5 m-2 space-y-8 bg-white rounded drop-shadow-lg'>
        <div>
          <Typography as='h1' size={'2xl'} className={'mb-1 text-center'}>
            Sing In your account
          </Typography>
          <div className='text-center text-md'>
            <Typography as='span'>Create your account? </Typography>
            <Link className='underline text-primary-500' to={'/registration'}>
              Sign Up
            </Link>
          </div>
        </div>

        <div className='space-y-2'>
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
          variant={'contained'}
          disabled={isSubmitting}
          type='submit'
          className={'py-3 text-lg h-14'}
          fullWidth>
          {isSubmitting && <Spiner size='xs' />}
          Sign In
        </Button>
      </Box>
    </Section>
  );
};
