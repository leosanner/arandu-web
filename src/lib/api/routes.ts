// Domain Application Address

const apiRoute = 'http://localhost:8080/';

// Available Paths

const paths: { [key: string]: string } = {
  user: 'user/',
  event: 'event/',
  ai: 'ai/',
};

// Major routes address

export const ApiRoutes = {
  USER: apiRoute + paths.user,
  EVENT: apiRoute + paths.event,
  AI: apiRoute + paths.ai,
};

// Each API resource available

export const UserApiRoutes = {
  CREATE: ApiRoutes.USER,
  LOGIN: ApiRoutes.USER + 'login',
};

export const EventApiRoutes = {
  CREATE: ApiRoutes.EVENT,
  GET_ALL_EVENTS: ApiRoutes.EVENT,
  DELETE: ApiRoutes.EVENT + 'delete',
};

export const AiApiRoutes = {
  PLAN_EVENTS: ApiRoutes.AI,
  CHAT_USER: ApiRoutes.AI + 'chat',
};
