import React, { useState, useEffect } from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import domain from 'url-domain-name';
import './newsList.scss';

const NewsList = ({ initData }) => {
	const bEnv = global.window;
	let hiddenIds;
	TimeAgo.addLocale(en);
	const timeAgo = new TimeAgo('en-US');
	let curPage;
	const [data, setData] = useState(initData);
	if (bEnv !== undefined) {
		curPage = window.curPage;
		//delete window.curPage;
		if (localStorage.getItem('hiddenIds') === null) {
			hiddenIds = [];
		}
		else {
			hiddenIds = (localStorage.getItem('hiddenIds')).split(",");
			hiddenIds.forEach((elm) => {
				let a = data.findIndex((obj) => obj.objectID === elm);
				if (a !== -1) {
					data.splice(a, 1);
				}
			});

		}
	}

	const upVote = (e) =>  {

	}

	const hidePost = (e) => {
		console.log(data.length);
		const id = e.target.dataset.id;
		let a = data.findIndex((obj) => obj.objectID === id);
		if (a !== -1) {
			data.splice(a , 1);
		}
		setData(data.map((obj) => obj));
		hiddenIds.push(id);
		localStorage.setItem('hiddenIds', hiddenIds);
	}

	const navigate = (e) => {
		if (e.target.textContent === "Previous") {
			curPage === 1 ? window.location.href = "/" : window.location.href = `/?page=${curPage - 1}`;
		}
		else {
			window.location.href = `/?page=${curPage + 1}`;
		}
	}

	return (
		<div className="newsList">
			<table>
				<thead>
					<tr>
						<th>Comments</th>
						<th>Vote<br />Count</th>
						<th>UpVote</th>
						<th style={{ textAlign: 'left' }}>News Details</th>
					</tr>
				</thead>
				<tbody>
					{data.map((data) =>
						<tr key={data.objectID}>
							<td className="bold">{data.num_comments}</td>
							<td className="bold">{data.points}</td>
							<td><span className="up" onClick={upVote} data-id={data.objectID}></span></td>
							<td className="newsD"><a href={data.url} className="bold">{data.title}</a>
								<span>{data.url !== null ? '(' + domain.from(String(data.url)).replace('www.', '') + ')' : ""}</span>
								<span className="auth">{data.author}</span>
								<span>{timeAgo.format(new Date(data.created_at)).replace('an', '1').replace('a minute', '1 minute')}</span>
								<span data-id={data.objectID} className="hide" onClick={hidePost}>hide</span>
							</td>
						</tr>
					)
					}
				</tbody>
			</table>
			<table className="navTable"><tbody>
				<tr>
					<td className="pn">
						<span className={global.curPage === 0 ? 'count0' : ''} suppressHydrationWarning={true} onClick={navigate}>Previous</span><b>|</b><span onClick={navigate}>Next</span>
					</td>
				</tr></tbody>
			</table>

		</div>
	)
}

export default NewsList;