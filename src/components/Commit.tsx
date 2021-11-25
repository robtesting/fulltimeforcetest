import moment from 'moment'
import React from 'react'

interface Props { 
    commit: { author: { name: string; date: string; }, message: string };
    sha: string;
    html_url: string;
}

function Commit(props: Props) {
    const {commit, sha, html_url } = props

    return (
        <tr className="table-dark table-hover" key={sha}>
            <td>
                {sha}
            </td>
            <td>
                {commit.author.name}
            </td>
            <td>
                {moment(commit.author.date).format('MMMM D YYYY, HH:mm:ss')}
            </td>
            <td>
                {commit.message}
            </td>
            <td>
                <a target='_blank' href={html_url} rel="noreferrer">See more</a>
            </td>
        </tr>
    )
}

export default Commit
