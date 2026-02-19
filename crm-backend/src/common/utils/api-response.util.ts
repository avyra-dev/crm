import type { ApiResponseObject } from '../dto/response';

interface ServiceResult<T = unknown> {
  message?: string;
  data?: T | null;
  status?: boolean;
  statusCode?: number;
}

export function toApiResponse<T = unknown>(result: ServiceResult<T>): ApiResponseObject<T> {
  return {
    message: result.message ?? '',
    data: result.data ?? null,
    status: result.status ? 'success' : 'error',
    statusCode: result.statusCode,
  };
}
