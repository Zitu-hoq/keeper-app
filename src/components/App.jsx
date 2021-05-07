import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreatArea"

function App(){
    let [items,setItems]=React.useState([{
        title:"",
        content:""
    }]);

    function submit(item){
        setItems(preValue => {
            return [...preValue,item]
        });
    }

    function deleteNote(id){
        setItems((preValue) => (preValue.filter((item,index) => (index !== id))));
    }

    return <div>
        <Header />
        <CreateArea onSubmit={submit}/>
        {items.map((note,index) => (index>=1 && <Note key={index} id={index} onDelete={deleteNote} title={note.title} content={note.content} />) )}
        <Footer />
    </div>;
}

export default App;