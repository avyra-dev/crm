export interface ApiResponseObject<T = any> {
  data?: T | null;
  message?: string | 'Api response success';
  status: 'success' | 'error';
  statusCode?: number;
}
