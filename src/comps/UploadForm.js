import React, { useState } from "react";
import Progressbar from "./Progressbar";

const UploadForm = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const changeHandler = (e) => {
        let selected = e.target.files[0]

        if (selected) {
            setFile(selected)
        }
    }

    return (
        <form>
            <label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={changeHandler}
                />
                <span>+</span>
            </label>
            <div className="output">
                {file && <div>{file.name}</div>}
                {error && <div className="error">{error}</div>}
                {file && <Progressbar file={file} setFile={setFile} />}
            </div>
        </form>
    );
}

export default UploadForm;