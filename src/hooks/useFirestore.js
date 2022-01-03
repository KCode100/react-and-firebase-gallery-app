import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

const useFirestore = (col) => {
    const [docs, setDocs] = useState([])

    useEffect(() => {
        const q = query(collection(db, col), orderBy("date", "desc"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let documents = []
            querySnapshot.forEach((doc) => {
                documents.push({ ...doc.data(), id: doc.id })
            })
            setDocs(documents)
        })

        return () => unsub()
    }, [col])

    return { docs }
}

export default useFirestore;