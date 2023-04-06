import { useState } from "react";

const CustomHook02 = (intVal ,intError) => {
    const [inps, setInps] = useState(intVal);
    const [error, setError] = useState(intError);

    const handleInputChange = (e) => {
        console.log("custom hook handleinputchange", inps)
        
        setInps( (inps) =>({...inps ,[e.target.name] : e.target.value }))

        if (e.target.name == "username") {
            if (e.target.value == "") {
                // setError({...error ,"usererror" : "User name is required" })
                setError({"usererror" : "User name is required"} )
            }else {
                setError({...error ,"usererror" : "" })
                
            }
        } 
        else if (e.target.name == "password") {
            if (e.target.value == "") {
                // setError({...error ,"usererror" : "User name is required" })
                setError({"passworderror" : "Password is required"} )
            }else {
                setError({...error ,"passworderror" : "" })
                
            }
        } 
    }
    

    // return (
    //     <>
        
    //     </>
    // )
    return {
        handleInputChange,
        inps,
        error
    }
}
export default CustomHook02