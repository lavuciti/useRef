import React, {useEffect, useRef} from 'react'

function Login(){

    //useRef se koristi da se selektuje neki odredjeni deo html koda
    const textInput = useRef()

    //useEffect se koristi da se pokrene program kada se ucita stranica
    useEffect(() =>{
        textInput.current.focus()
    }, [])

    return(
        <div>
            <h1>Login</h1>
            <form action="">
                <input type="text" ref={textInput} placeholder="name"/>
                <input type="text" placeholder="email"/>
            </form>
        </div>
    )
}

export default Login