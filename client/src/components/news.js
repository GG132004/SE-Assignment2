import React from "react";
function News(){
    const [title, setTitle] = React.useState(null);
    const [author, setAuthor] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    
    React.useEffect(() => {
      // fetch('https://api-browser.newscatcherapi.com/?1=W_7JIFBsPm4MU8yFbduNcxX8_woZ2IIWkTUAKgug0Fk')
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(results => results.json())
        .then(data => {
        const user = data[0]
        setTitle(user.name);
        setAuthor(user.email);
        setDescription(user.address.street);
        });
    }, []);
  
    return (
      <div style={{float: "left"}}>
       
        User Name: {!title ? 'Loading...' : `${title}`} <br/>
        Email: {!author ? 'Loading...' : `${author}`} <br/>
        Address: {!description ? 'Loading...' : `${description}`} <br/>
      </div>
    );
  }
export default News