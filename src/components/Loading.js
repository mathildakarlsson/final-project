import React from 'react' 
import styled from 'styled-components';
// import Lottie from 'react-lottie'
// import * as loading from '../assets/loading-plane.json'

const Loading = () => {

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: loading,
    //     rendererSettings: {
    //       preserveAspectRatio: "xMidYMid slice"
    //     }
    // };

    return (
        // <p>Loading ...</p>
    //     <div>
    //     <Lottie
    //       options={defaultOptions}
    //       height={200}
    //       width={200}
    //     />
    //   </div>
        <>
    <div class="loader"></div>
        <LoadingText>Ditt email skickas, vänligen vänta...</LoadingText>
        </>
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

const LoadingText = styled.p`
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 305;
    line-height: 1.8em;
    padding-left: 0.5rem;
`