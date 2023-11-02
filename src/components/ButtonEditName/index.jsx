import { useState } from "react";
import ReactModal from "react-modal";
import Field from '../Field';
import { useDispatch, useSelector } from "react-redux";
import { selectAuthToken } from "../../redux/slices/authSlice";
import { editUserName } from "../../redux/slices/userSlice";


export default function ButtonEditName () {

	const [showModal , setShowModal] = useState(false);
	const [error, setError] = useState("");
	const dispatch = useDispatch();
	const token = useSelector(selectAuthToken);

	const submitFormEditName = async (e) => {
		e.preventDefault();
		const userName = e.target.username.value;
		try {
			if (!userName) {
				setError("The username field cannot be empty.");
				return;
			}
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ userName: userName })
            })
            if (!response) {
                throw new Error("Échec de la mise à jour du nom d'utilisateur")
            }
            dispatch(editUserName(userName));
			setError("");
            setShowModal(false);
        } catch (e) {
            console.log(e);
			alert("An error has occurred. Please try again later.");
        }
	}

	return (
		<>
			<button className="edit-button" onClick={()=>setShowModal(true)}>Edit Name</button>
			<ReactModal isOpen={showModal} 
				className="modal" 
				overlayClassName="overlay" 
				appElement={document.getElementsByClassName('header')}
			>
				<button className="xmark" onClick={()=>setShowModal(false)}>
					<i className="fa fa-window-close fa-2x" ></i>
				</button>
				<form onSubmit={submitFormEditName}>
					<Field labelAndID="username" name="username" innerText="Enter a new username"/>
					{error && <span className="message-error">{error}</span>}{<br />}
					<button className="edit-button " type="submit">Save</button>
				</form>
			</ReactModal>
		</>
	);
};

