import { URL } from "shared/constants/URL";
import { fetchRequest } from "shared/api/utils";
import { Question } from "../model/types";

export const getQuestionsReq = () : Promise<Question> => {
  const requestUrl = `${URL}/questions`;
  const method = 'GET';

  return fetchRequest(requestUrl, {method});
}