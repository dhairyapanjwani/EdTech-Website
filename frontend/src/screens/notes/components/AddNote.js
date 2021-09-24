import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 500;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};

	return (
		<div className='note bg-white border-gray-200 dark:bg-gray-500 border-2 dark:border-gray-600'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
				className="notes-textarea bg-white dark:bg-gray-500"
			>	
			</textarea> 
			<div className='note-footer'>
				<small className="dark:text-gray-100">
					{characterLimit - noteText.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
