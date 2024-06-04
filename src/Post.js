import React, { useState } from 'react'

export default function Post(props) {

  const[Likes, setlikes] = useState(0);
  const[dislikes, setdislikes] = useState(0);

  function like(){
    setlikes(1)
    setdislikes(0)
  }

  function dislike(){
    setlikes(0)
    setdislikes(1)
  }

let title_ref = React.createRef();

function change(){
  title_ref.current.style.background = "Black"
  title_ref.current.style.fontSize = "55px"
  title_ref.current.innerHTML = "Текст поменяли"
}

  return (
    <div className='post'>
      <h1 ref={title_ref} onClick={change}>{props.postTitle}</h1>
       <p>{props.text}</p> 
      <p>Лайки {Likes} </p>
    <p>Дизлайки {dislikes} </p>
    <button onClick={like}>Лайкнуть</button>
    <button onClick={dislike}>Дизлайкнуть</button>
        <button onClick={() => props.deletePost(props.id)}>Удалить</button>


    
    </div>
  )
}
