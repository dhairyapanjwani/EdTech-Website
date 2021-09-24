import React from 'react';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='note-search mt-5 bg-gray-100 dark:bg-gray-700'>
			<i className="fas fa-search mx-5 py-3 note-search-icon"></i>
			<input
			className="bg-gray-100 dark:bg-gray-700"
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='Search Notes . . .'
			/>
		</div>
	);
};

export default Search;
