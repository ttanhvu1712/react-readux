import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './components/CommentDetail'

const App = () => {
	return (
		<div className="ui container comments"> 
			<CommentDetail 
				author={faker.name.findName()} 
				timeAgo={"Today at 4:45PM"} 
				content={"Comment 01"}
				avatar={faker.image.avatar()}
			/>
			<CommentDetail 
				author={faker.name.findName()} 
				timeAgo={"Today at 5:45PM"} 
				content={"Comment 02"}
				avatar={faker.image.avatar()}
				/>
			<CommentDetail 
				author={faker.name.findName()} 
				timeAgo={"Today at 6:45PM"} 
				content={"Comment 03"}
				avatar={faker.image.avatar()}
			/>
		</div>
	)
};

ReactDOM.render(<App />, document.querySelector('#root'))