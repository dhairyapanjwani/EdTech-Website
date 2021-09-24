// import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span className="break-words">{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<i onClick={() => handleDeleteNote(id)}
					className='fas fa-trash delete-icon'></i>
			</div>
		</div>
	);
};

export default Note;
