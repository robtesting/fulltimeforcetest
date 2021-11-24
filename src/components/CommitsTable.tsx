import React from 'react'
import Commit from './Commit';

interface Props {
    commits: any[];
}

function CommitsTable(props: Props) {
    const { commits } = props;

    return (
        <table className="table table-dark table-hover">
            <thead>
                <tr>
                    <td>COMMIT SHA</td>
                    <td>COMMITTER</td>
                    <td>DATE</td>
                    <td>COMMIT MESSAGE</td>
                    <td>LINK TO COMMIT</td>
                </tr>
            </thead>
            <tbody>
                {
                    commits.map(({commit, sha, html_url }) => <Commit key={sha} commit={commit} sha={sha.substring(0, 7)} html_url={html_url}/>
                    )
                }
            </tbody>
        </table>
    )
}

export default CommitsTable
