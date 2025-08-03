// Domain Application Address

const apiRoute = 'http://localhost:8080/';

// Available Paths

const paths: { [key: string]: string } = {
  user: 'user/',
  event: 'event/',
};

// Major routes address

export const ApiRoutes = {
  USER: apiRoute + paths.user,
  EVENT: apiRoute + paths.event,
};

// Each API resource available

export const UserApiRoutes = {
  CREATE: ApiRoutes.USER,
  AUTH: ApiRoutes.USER + 'login',
};
