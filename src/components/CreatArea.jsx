import React from "react";

function CreateArea(props) {

    let [item,setItem] = React.useState({
        title:"",
        content:""
    });

    function handleChang(event){
        let name=event.target.name;
        let value = event.target.value;
        setItem(preValue => {
          return {
            ...preValue,
            [name]: value
          }
        });  
    }

    

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChang} value={item.title}/>
        <textarea name="content" onChange={handleChang} value={item.content}placeholder="Take a note..." rows="3" />
        <button onClick={(event) => {
            props.onSubmit(item);
            setItem({title:"",content:""});
            event.preventDefault();
      }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
