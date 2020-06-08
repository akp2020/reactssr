import React, { useState } from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import domain from 'url-domain-name';
import './newsList.scss';

const NewsList = ({ initData }) => {
	TimeAgo.addLocale(en);
	const timeAgo = new TimeAgo('en-US');

	return (
		<div className="newsList">
			<table>
				<thead>
					<tr >
						<th>Comments</th>
						<th>Vote<br />Count</th>
						<th>UpVote</th>
						<th>News Details</th>
					</tr>
				</thead>
				<tbody>
					{initData.map((data) =>
						<tr key={data.objectID}>
							<td className="bold">{data.num_comments}</td>
							<td className="bold">{data.points}</td>
							<td><span className="up"></span></td>
							<td><a href={data.url} className="bold">{data.title}</a>
								<span>{data.url !== null ? '(' + domain.from(String(data.url)).replace('www.', '') + ')' : ""}</span>
								<span>{timeAgo.format(new Date(data.created_at))}</span><span>by {data.author}</span></td>
						</tr>
					)
					}
					<tr>
						<td colSpan="4"></td>
					</tr>
				</tbody>
			</table>

		</div>
	)
}

export default NewsList;