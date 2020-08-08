import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					author={faker.name.findName()}
					timeAgo={"Today at 4:45PM"}
					content={"Comment 01"}
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author={faker.name.findName()}
					timeAgo={"Today at 5:45PM"}
					content={"Comment 02"}
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author={faker.name.findName()}
					timeAgo={"Today at 6:45PM"}
					content={"Comment 03"}
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
