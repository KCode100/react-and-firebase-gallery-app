import { useState, useEffect } from "react";
import { projectStorage, db } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        // references
        const storageRef = ref(projectStorage, file.name)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('upload is ' + progress + '% done')
                setProgress(progress)
            },
            (error) => {
                setError(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUrl(downloadURL)
                    console.log(downloadURL)
                    addDoc(collection(db, "images"), {
                        url: downloadURL,
                        date: serverTimestamp()
                    })
                })
            }
        )
    }, [file])
    return { progress, url, error };
}

export default useStorage;