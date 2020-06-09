import React, { useState, useEffect } from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import domain from 'url-domain-name';
import './newsList.scss';

const NewsList = ({ initData }) => {
	TimeAgo.addLocale(en);
	const timeAgo = new TimeAgo('en-US');
	let curPage;
	if(global.window !== undefined){
		curPage = window.curPage;
		delete window.curPage;
	}
	
	const navigate = (e)=>{
			if(e.target.textContent === "Previous"){
				if(curPage === 1 || curPage === 0){
					window.location.href = "/";
				} else{
					window.location.href=`/?page=${curPage-1}`; 
				} 				
			}
			else {
				window.location.href=`/?page=${curPage+1}`;	
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
						<th style={{textAlign: 'left'}}>News Details</th>
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
								<span>{timeAgo.format(new Date(data.created_at)).replace('an','1')}</span><span>by {data.author}</span></td>
						</tr>
					)
					}
					<tr>
						<td colSpan="4" className="pn">
							<span id="prev" onClick={navigate}>Previous</span><b>|</b><span onClick={navigate}>Next</span>
						</td>
					</tr>
				</tbody>
			</table>

		</div>
	)
}

export default NewsList;