import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import domain from 'url-domain-name';
import './newsList.scss';

const NewsList = ({ initData }) => {
	const bEnv = global.window;
	TimeAgo.addLocale(en);
	const timeAgo = new TimeAgo('en-US');
	let curPage;
	if(bEnv !== undefined){
		curPage = window.curPage;
		delete window.curPage;
	}
	
	const upVote = (e)=>{
		
	}
	
	const navigate = (e)=>{
			if(e.target.textContent === "Previous"){
				curPage === 1 ?  window.location.href = "/" : window.location.href=`/?page=${curPage-1}`;				
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
								<span>{timeAgo.format(new Date(data.created_at)).replace('an','1').replace('a minute', '1 minute')}</span><span>by {data.author}</span></td>
						</tr>
					)
					}
					<tr>
						<td colSpan="4" className="pn">
							<span className={global.curPage===0?'count0': ''}  suppressHydrationWarning={true} onClick={navigate}>Previous</span><b>|</b><span onClick={navigate}>Next</span>
						</td>
					</tr>
				</tbody>
			</table>

		</div>
	)
}

export default NewsList;