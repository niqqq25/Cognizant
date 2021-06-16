import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input, Textarea, Button, Alert } from '../../components';
import { useLazyFetch } from '../../hooks';
import { retrieveApiErrors } from '../../utils';
import { taskSubmitSchema } from './validationSchemas';

const SUCCESS_SUBMIT_TEXT = 'You have successfully submitted the task';
const ERROR_SUBMIT_TEXT =
  'The task could not be submitted for the following reasons: ';

const TaskSubmit = () => {
  const [alert, setAlert] = useState(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(taskSubmitSchema),
  });

  const [submitTask, { loading }] = useLazyFetch('/api/tasks', {
    options: { method: 'POST' },
    onComplete: () =>
      setAlert({ variant: 'success', text: SUCCESS_SUBMIT_TEXT }),
    onError: (errors) =>
      setAlert({
        variant: 'danger',
        text: ERROR_SUBMIT_TEXT + retrieveApiErrors(errors).join(', '),
      }),
  });

  const handleTaskSubmit = (values) => {
    setAlert(null);
    submitTask(values);
  };

  return (
    <div>
      {alert && <Alert variant={alert.variant}>{alert.text}</Alert>}
      <form
        onSubmit={handleSubmit(handleTaskSubmit)}
        className="w-full max-w-lg"
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 self-start pt-3">
            <label className="uppercase">Name</label>
          </div>
          <div className="md:w-2/3">
            <Input
              {...register('playerName')}
              helperText={errors.playerName?.message}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6 md:mb-12">
          <div className="md:w-1/3 self-start pt-3">
            <label className="uppercase">Solution Code</label>
          </div>
          <div className="md:w-2/3">
            <Textarea
              className="h-40"
              {...register('solutionCode')}
              helperText={errors.solutionCode?.message}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <Button type="submit" loading={loading}>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskSubmit;
