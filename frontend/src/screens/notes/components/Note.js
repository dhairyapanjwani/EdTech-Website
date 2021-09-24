// import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note bg-gray-200 border-2 dark:bg-gray-700 dark:border-gray-600'>
			<span className="break-words dark:text-gray-100 ">{text}</span>
			<div className='note-footer'>
				<small className="dark:text-gray-100">{date}</small>
				<i onClick={() => handleDeleteNote(id)}
					className='fas fa-trash delete-icon dark:text-gray-200'></i>
			</div>
		</div>
	);
};

export default Note;
