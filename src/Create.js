import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    const handleSubmit = (e) => { 

    };


    return (<div className="create">
        <h2>Add new blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>Blog body:</label>
            <textarea
                required
                onChange={(e) => setBody(e.target.value)}
            />
            <label>Blog author:</label>
            <select
                value={author}
                onChange={(e) => { setAuthor(e.target.value) }}
            >
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>
            <button>Add Blog</button>
             {/* <h1>{title}</h1>
            <p>{body}</p> */}
        </form>
    </div>);
}

export default Create;