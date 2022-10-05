import axios from "axios";
import { saveAs } from "file-saver";

export const createPDFTicket = (formData) =>{
    try{
        axios.post("http://localhost:8000/v1/create-pdf/", formData)
        .then(()=>
        axios.get("http://localhost:8000/v1/fetch-pdf", {
            responseType: "blob",
        })
        )
        .then((res)=> {
            console.log(res)
            const pdfBlob = new Blob([res.data], {type: "application/pdf"});
            saveAs(pdfBlob, "Boarding.pdf")
        })
    }catch(error){
        console.log(error);
    }
}