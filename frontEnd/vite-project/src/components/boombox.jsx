import { React, useState } from "react"
import "./boomBox.css"
import Slider from '@mui/material/Slider';

export const BoomBox = () => {
    return (
        <div id="container">
            <Background />
            <Screen />
            <Tape />
            <VolumeSliderBox />
        </div>
    )
}

const Background = () => {
    return (
        <div id="background">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={712}
                height={428}
                fill="none"
            >
                <rect width={712} height={356} y={72} fill="#9107FD" rx={14} />
                <path fill="#D74BA3" d="M273 144h174v284H273z" />
                <path
                    fill="#4407FD"
                    d="M0 86c0-7.732 6.268-14 14-14h684c7.732 0 14 6.268 14 14v73H0V86Z"
                />
                <path fill="#9107FD" d="M146 37h34v35h-34V37ZM540 37h34v35h-34V37Z" />
                <path fill="#4407FD" d="M146 9a9 9 0 0 1 9-9h410a9 9 0 0 1 9 9v28H146V9Z" />
            </svg>
        </div>
    );
}
const Screen = () => {
    return (
        <div id="screen">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="141"
                height="57"
                fill="none"
                viewBox="0 0 141 57"
            >
                <rect width="141" height="57" fill="#210537" rx="8"></rect>
            </svg>
        </div>
    );
}
const Tape = () => {
    return (
        <>
            <TapeBox />
            <TapeReel />
            <TapeWheel id={"tapeWheelLeft"} spin={true} />
            <TapeWheel id={"tapeWheelRight"} spin={true} />
        </>
    )
}
const TapeBox = () => {
    return (
        <div id="tapeBox">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="141"
                height="81"
                fill="none"
                viewBox="0 0 141 81"
            >
                <rect width="141" height="81" fill="#210537" rx="10"></rect>
            </svg>
        </div>
    )
}
const TapeReel = () => {
    return (
        <div id="tapeReel">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="125"
                height="45"
                fill="none"
                viewBox="0 0 125 45"
            >
                <path
                    stroke="#D9D9D9"
                    strokeWidth="3"
                    d="M102.728 2H23.22C11.76 2 2.47 11.29 2.47 22.75S11.76 43.5 23.22 43.5h79.508c11.46 0 20.75-9.29 20.75-20.75S114.188 2 102.728 2z"
                ></path>
            </svg>
        </div>
    )
}
const TapeWheel = ({ id, spin }) => {
    return (
        <div id={id} className={spin ? 'spin' : ''}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="44"
                fill="none"
                viewBox="0 0 45 44"
            >
                <circle
                    cx="22.731"
                    cy="22"
                    r="16"
                    fill="#D9D9D9"
                    transform="rotate(30 22.731 22)"
                ></circle>
                <ellipse
                    cx="22.731"
                    cy="22"
                    fill="#210537"
                    rx="9.806"
                    ry="9.806"
                    transform="rotate(30 22.731 22)"
                ></ellipse>
                <rect
                    width="2.065"
                    height="4.129"
                    x="29.768"
                    y="8.779"
                    fill="#210537"
                    rx="1"
                    transform="rotate(30 29.768 8.78)"
                ></rect>
                <rect
                    width="2.065"
                    height="4.129"
                    x="37.428"
                    y="17.969"
                    fill="#210537"
                    rx="1"
                    transform="rotate(76 37.428 17.97)"
                ></rect>
                <rect
                    width="2.065"
                    height="4.129"
                    x="31.344"
                    y="28.76"
                    fill="#210537"
                    rx="1"
                    transform="rotate(-60 31.344 28.76)"
                ></rect>
                <rect
                    width="2.065"
                    height="4.129"
                    x="9.511"
                    y="14.963"
                    fill="#210537"
                    rx="1"
                    transform="rotate(-60 9.51 14.963)"
                ></rect>
                <rect
                    width="2.065"
                    height="4.129"
                    x="18.701"
                    y="7.304"
                    fill="#210537"
                    rx="1"
                    transform="rotate(-14 18.7 7.304)"
                ></rect>
                <rect
                    width="2.065"
                    height="4.129"
                    x="15.694"
                    y="35.221"
                    fill="#210537"
                    rx="1"
                    transform="rotate(-150 15.694 35.22)"
                ></rect>
                <rect
                    width="2.065"
                    height="4.129"
                    x="8.035"
                    y="26.03"
                    fill="#210537"
                    rx="1"
                    transform="rotate(-104 8.035 26.03)"
                ></rect>
                <rect
                    width="2.065"
                    height="4.129"
                    x="26.762"
                    y="36.696"
                    fill="#210537"
                    rx="1"
                    transform="rotate(166 26.762 36.696)"
                ></rect>
            </svg>
        </div>
    )
}
const VolumeSliderBox = () => {
    return (
        <>
            <VolumeSlider id="topSlider" start={30} />
            <VolumeSlider id="bottomSlider" start={70} />
        </>
    );
};

const VolumeSlider = ({ id, start }) => {
    const [value, setValue] = useState(start);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Slider
            aria-label="Volume"
            value={value}
            onChange={handleChange}
            id={id}
            color="secondary"
        />
    );
};


