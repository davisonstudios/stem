import styled from 'styled-components'
import Image from 'next/image';

const RocketStyle = styled.div`
    z-index: 5;
    position: absolute;
    right: 20%;
    bottom: 8%;
    animation: fly 4.75s ease-in-out infinite;
    @keyframes fly {
        from {
            transform: rotateZ(30deg) scale(1.5);
        }
        to {
            transform: translate(-40vw,-80vh) scale(0.2);
        }
       }
    }
    @media screen and (max-width: 600px) {
        visibility: hidden;
        animation: none;
    }
`
const Rocket = () => {
    return <RocketStyle>
        <Image src='/images/rocket.png' width='130px' height='100px' />
    </RocketStyle>
}

export default Rocket