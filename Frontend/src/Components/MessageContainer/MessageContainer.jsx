import React from 'react';
import MessageArea from './MessageArea';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { useMediaQuery } from '@react-hook/media-query';

const MessageContainer = () => {
    const selectedUser = useSelector((state) => state.user.selectedUser);


    return (
        <>
         
            {selectedUser && (
                <div className='border-2 p-5  h-[50%] md:h-full w-full border-red-500 rounded-lg '>

                    <div className='flex gap-2 items-center border-2 rounded-lg bg-zinc-800 text-white px-4 py-2 mb-2'>
                        <div>
                            <div className='w-12 rounded-full'>
                                <img className='rounded-2xl' src={selectedUser.profilePhoto} alt="user-profile" />
                            </div>
                           


                        </div>
                        <div className='flex flex-col flex-1'>
                            <div className='flex justify-between gap-2'>
                                <p>{selectedUser.fullName}</p>
                            </div>
                        </div>
                    </div>
                    <MessageArea />
                </div>
            )}
        </>
    );
};

export default MessageContainer;
