import request from 'umi-request';

export async function getPDFSource(id: string) {
  return request('/api/pdf/test');
}
