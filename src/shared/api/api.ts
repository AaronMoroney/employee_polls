import { URL } from "../constants/URL";
import { fetchRequest } from "./utils";

export const getUsersReq = () => {
  const requestUrl = `${URL}/users`;
  const method = 'GET';

  return fetchRequest(requestUrl, {method});
}

export const getQuestionsReq = () => {
  const requestUrl = `${URL}/questions`;
  const method = 'GET';

  return fetchRequest(requestUrl, {method});
}