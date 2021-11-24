import { octokit } from "."
import { REPO_NAME, REPO_OWNER } from "../Constants";

export const getCommits = async (): Promise<any[]> => {
    const response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
        owner: REPO_OWNER,
        repo: REPO_NAME,
    });
    if (response.status === 200) {
        return response.data;
    } else {
        return [];
    }
}
