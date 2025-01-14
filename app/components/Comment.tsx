 'use client'
 import React, { useEffect, useState } from 'react'
 
 const Comment = () => {
    const [comment , setComment] = useState('');
    const [comments , setComments] = useState<string[]>([]);

    useEffect(() => {
        const commentSave = localStorage.getItem('comments')
        if(commentSave){
            setComments(JSON.parse(commentSave))
        }
    },[])

    const addComments =() => {
        if(comment.trim() !== ''){
            const UpdateComments = [...comments, comment];
            setComments(UpdateComments)
            setComment('');
            localStorage.setItem('comments',JSON.stringify(UpdateComments))
        }
    }

   return (
     <><div>
           <h1 className='text-2xl font-bold mt-4 '>Comment Box</h1>
           <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} className='border border-blue-800 mt-3 rounded-sm w-80 p-2' /><br />
           <button onClick={addComments} className='bg-blue-300 w-36 mt-4 p-3 rounded-md'>Add Comment</button>
       </div>
       <div>
        <h2 className='mt-3 text-xl'>All comments:</h2>
        {comments.length === 0 ? (<p>No comment yet</p>): <ul>
        {comments.map((data,index) => (
            <li key={index}>{data} </li>

        ))}
        </ul>
        }

      </div></>
   )
 }
 
 export default Comment
