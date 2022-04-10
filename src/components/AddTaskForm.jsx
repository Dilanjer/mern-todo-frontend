import TextField from 'components/TextField';
import { useForm } from 'react-hook-form';
import Button from 'components/Button';
import React from 'react';

import Spiner from './Spiner';

const AddTaskForm = ({ hendleClose }) => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit = async (data) => {
    return await new Promise((resolve) => setTimeout(resolve, 3000));
  };

  const validation = {
    required: 'You need to enter your task text.',
    minLength: {
      value: 1,
      message: 'Task text must be between 5 and 40 characters.',
    },
    maxLength: {
      value: 70,
      message: 'Task text must be between 5 and 40 characters.',
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        disabled={isSubmitting}
        id={'task'}
        type={'text'}
        register={register('task', validation)}
        placeholder={'Enter your task.'}
        error={errors.task}
        fullWidth
      />
      <div className='text-left space-x-4 pt-3'>
        <Button disabled={isSubmitting} type={'submit'} className={'p-1'}>
          {isSubmitting && <Spiner size='xx' />}
          Confirm
        </Button>
        <Button
          disabled={isSubmitting}
          onClick={hendleClose}
          className={'p-1'}
          variant='outlined'>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default AddTaskForm;
