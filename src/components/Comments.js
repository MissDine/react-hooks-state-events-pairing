function Comments({user, commentTo, id, classs}){
    return (
      <div className={`comment ${classs}`} key = {id}>
        <h3>{user}</h3>
        <p>{commentTo}</p>
        <hr />
      </div>
    )
  }
  
  export default Comments;