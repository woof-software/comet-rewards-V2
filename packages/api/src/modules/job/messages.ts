import { JobStatus } from './constants';

export const errors = {
  jobNotFound: (id: number) => new Error(`Job not found, id: ${id}`),
  jobCompleted: (id: number, status: JobStatus) =>
    new Error(`Job already completed, status: ${status}`),
  incorrectType: (type: string) => new Error(`Incorrect job type: ${type}`),
};
