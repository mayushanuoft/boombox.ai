import * as React from "react"

export const BoomBox = () => {
    return (
        <div>
            <Background />
        </div>
    )
}

const Background = () => {
    return (
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
    );
}