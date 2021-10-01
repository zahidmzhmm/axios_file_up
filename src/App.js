import React, {useState} from 'react';
import axios from "axios";

function App() {
    const [image, setImage] = useState("");
    const formSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', "Test")
        formData.append('image', image);
        axios({
            headers: {
                'x-api-key': "admin12123"
            },
            url: "http://localhost/crownedtutors.v2.0/api/addBlogs",
            method: "POST",
            data: formData
        }).then((response) => {
            console.log(response.data)
        })
    }
    return (
        <div className="App">
            <form onSubmit={(e) => formSubmit(e)}>
                <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
                <button onSubmit={(e) => formSubmit(e)}>Upload</button>
            </form>
        </div>
    );
}

export default App;
