"use client";
import { useEffect } from "react";

type Props = {
    labels: string[],
    active: string;
    onActive: (active: string) => void;
}

const ButtonGroup = (({ labels, onActive, active }: Props) => {

    useEffect(() => {
        console.log(active);

            if (!active) {
                onActive(labels[0]);
            }
    }, [active])

    return (
        <div className='flex justify-between border mx-4 rounded-lg border border-gray-200 rounded-lg shadow dark:bg-neutral-900 bg-gray-100 dark:border-gray-700 font-light' role="group">
            {
                labels && labels.map((label: string) => (
                    <button key={label} onClick={() => onActive(label)}className={`${active === label && `dark:bg-white dark:text-black text-white bg-neutral-800`} active:bg-white active:text-black dark:focus:bg-white p-3 dark:focus:text-black first:rounded-l-lg last:rounded-r-lg`}>{label}
                    </button>
                ))
            }
        </div>
    )
});

export default ButtonGroup;