import { GITHUB_URI } from "../constants";
import { GITHUB_RES } from "../types";

export const fetchUser = (userName: string): Promise<GITHUB_RES> =>
  fetch(`${GITHUB_URI}/${userName}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error();
      }
    })
    .catch(() => {
      throw new Error();
    });
