import { URL } from "shared/constants/URL";
import { fetchRequest } from "shared/api/utils";
import { UsersState } from "../model/types";

export const getUsersReq = (): Promise<UsersState> => {
  const requestUrl = `${URL}/users`;
  const method = 'GET';

  return fetchRequest(requestUrl, {method});
}