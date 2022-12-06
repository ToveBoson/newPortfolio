import axios from "axios";
import { IGitRepo } from "../../models/IGitRepo";
import { createHtml } from "../main";

export function getList(): void {
  axios
    .get<IGitRepo[]>("https://api.github.com/users/ToveBoson/repos")
    .then((response) => {
      createHtml(response.data);
    });
}
