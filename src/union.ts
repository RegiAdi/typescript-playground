type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export function runUnion(httpMethod: HTTPMethod) {
  console.log(httpMethod);
}
