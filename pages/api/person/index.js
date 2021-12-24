import { data } from "../../../data";
import { serialize } from 'cookie';

export default function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    return response.status(200).json(data);
  }

  if (method === "POST") {
    const { body } = request;
    data.push({ ...body, id: data.length + 1 });
    response.setHeader('Set-Cookie', serialize('token', 'tokencookie', {path: '/'}));
    return response.status(200).json(data);
  }
}