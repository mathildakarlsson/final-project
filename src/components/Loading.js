import React from 'react' 
import Lottie from 'react-lottie'
import * as loading from '../assets/loading-plane.json'

const Loading = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        // <p>Loading ...</p>
        <div>
        <Lottie
          options={defaultOptions}
          height={200}
          width={200}
        />
      </div>
    )
}


export default Loading

// import { useSelector } from 'react-redux'

// const Loading = () => {
// const Loader = useSelector((store) => store.ui.isLoading)

//     return (
//         <>
//             {Loader && <div> Loading ...</div>}
//         </>
//     )
// }