export enum Method {
  Put = 'PUT',
  Get = 'GET',
  Post = 'POST',
  Delete = 'DELETE',
}

export interface FetchDataParams {
  url: string;
  method?: Method;
  body?: unknown;
  headers?: HeadersInit;
}

export const fetchJson = async ({ url, method, body }: FetchDataParams) =>
  await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  });
