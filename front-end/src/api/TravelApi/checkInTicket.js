import axios from "axios";
import { saveAs } from "file-saver";

export const createPDFTicket = async (formData) =>{
    try{
        axios.post("https://travels-web-app.herokuapp.com/v1/create-pdf/", formData)
        .then(()=>
        axios.get("https://travels-web-app.herokuapp.com/v1/fetch-pdf", {
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