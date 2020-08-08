import React from "react";

const ApprovalCard = (props) => {
	console.log(props);
	return (
		<div className="ui card">
			<div className="content"> {props.children} </div>
			<div className="extra content">
				<div className="ui two button">
					<div className="basic ui green button">Approve</div>
					<div className="basic ui red button">Reject</div>
				</div>
			</div>
		</div>
	);
};

export default ApprovalCard;
