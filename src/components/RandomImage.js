import React, {useState, useEffect} from 'react';

function RandomImage() {
    const [image, setImage] = useState("")
    const [variable, setVariable] = useState(false)
    

    
    useEffect(() =>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(res => {
            setImage(res.message)
        })
        .catch(err => {
            console.log(err);
        })
        }, [variable])

    return(
        <div>
            
            <button type="button" onClick={() => { setVariable(!variable) }}>Fetch Image</button>
            <div>
            <img src={image} alt=''/>
            </div>
        </div>
    )
    
}
export default RandomImage;