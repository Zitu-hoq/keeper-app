import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    let [item,setItem] = React.useState({
        title:"",
        content:""
    });
    let [isExpanded,setExpanded]=React.useState(false);

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

    function expand(){
      setExpanded(true);
    }

    

  return (
    <div>
      <form className="create-note">
        
        {isExpanded && <input 
          name="title" 
          placeholder="Title" 
          onChange={handleChang} 
          value={item.title}/>}
        
        <textarea 
          name="content" 
          onClick={expand}
          onChange={handleChang} 
          value={item.content}
          placeholder="Take a note..." 
          rows={isExpanded? 3 : 1}
        />
          
        <Zoom in={isExpanded}>
          <Fab onClick={(event) => {
              props.onSubmit(item);
              setItem({title:"",content:""});
              event.preventDefault();
            }}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
