"use client";

import { ArchiveRestore, Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { appDispatch, rootState } from '@/store/store';
import { deleteNote, activateNote } from '@/store/notesSlice';
import { useState } from 'react';

const Archived = () => {
	const notesData = useSelector((state: rootState) => state.notes.notes);
	const dispatch = useDispatch<appDispatch>();

	const archivedNotes = notesData.filter(n => n.status === "archived");

	if (archivedNotes.length <= 0) {
		return (
			<div className='flex flex-1 justify-center items-center py-8 md:py-16'>
				<div className="w-80 md:w-120 md:py-3.5 py-2.5 px-3 md:px-4 border border-[#5F6368] rounded-lg shadow-lg">
					<p className='text-[#868789] font-semibold md:text-center'>Notes you <b>archive</b> are stored here, keeping your workspace clean while staying easily accessible.</p>
				</div>
			</div>
		)
	}

	return (
		<div className='flex flex-1 flex-col py-4 md:py-8'>
			<div className='flex flex-wrap gap-4 items-center justify-center mt-4 md:mt-8'>
				{
					archivedNotes.map((note, index) => (
						<div key={note.id} className='border border-[#5F6368] rounded-lg w-80 px-3 py-3 shadow-lg wrap-break-word whitespace-pre-wrap'>
							<h1 className='text-xl mb-2'>{note.title}</h1>
							<p>{note.text}</p>
							<div className='flex justify-end'>
								<div className='flex'>
									<button
										onClick={() => dispatch(activateNote({ id: note.id }))}
										className='md:p-3 p-2.5 rounded-full text-gray-300 hover:bg-gray-900 hover:text-white transition'
									>
										<ArchiveRestore size={16} />
									</button>
									<button
										onClick={() => dispatch(deleteNote({ id: note.id }))}
										className='md:p-3 p-2.5 rounded-full text-gray-300 hover:bg-gray-900 hover:text-red-500 transition'
									>
										<Trash2 size={16} />
									</button>
								</div>
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Archived;