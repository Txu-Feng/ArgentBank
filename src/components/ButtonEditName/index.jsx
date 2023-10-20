import { useState } from "react";
import ReactModal from "react-modal";
import Field from '../Field';
import { useDispatch } from "react-redux";


export default function ButtonEditName () {

	const [showModal , setShowModal] = useState(false);
	const [error, setError] = useState(null);
	const dispatch = useDispatch();

	const submitFormEditName = (e) => {
		e.preventDefault();
		const userName = e.target.userName.value;
		if (!userName) {
			setError("The username field cannot be empty.");
			return;
		  }
	}

	return (
		<>
			<button onClick={()=>setShowModal(true)}>Edit Name</button>
			<ReactModal isOpen={showModal} 
				className="modal" 
				overlayClassName="overlay" 
				appElement={document.getElementsByClassName('app')}
			>
				<div className="modal-content">
					<button className="xmark" onClick={()=>setShowModal(false)}>
						<i className="fa fa-window-close fa-2x" ></i>
					</button>
					<form onSubmit={() => submitFormEditName}>
						<Field labelAndID="username" name="username" innerText="Enter a new username"/>
						<button>Save</button>
					</form>
				</div>
			</ReactModal>
		</>
	);
};

