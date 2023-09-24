import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../App'

function LastestImage() {
    const { latestPost, setLatestPost } = useContext(AppContext);

    useEffect(() => {
        fetch("http://localhost:3000/latest")
            .then(resp => resp.json())
            .then(data => {
                setLatestPost(data.image_url);
            })
            .catch((error) => console.log(error));
    }, [latestPost]);

  return (
    <div>
        <img src={latestPost} alt="latest post" className='latest-image' />
    </div>
  )
}

export default LastestImage