import React from "react";

// https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086
const debounce = (func: (...args: any[]) => any, wait: number) => {
    let timeout: NodeJS.Timeout;

    return function executedFunction(...args: any[]) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// https://webdesign.tutsplus.com/tutorials/javascript-debounce-and-throttle--cms-36783
//initialize throttlePause variable outside throttle function
let throttlePause: boolean;

const throttle = (callback: (...args: any[]) => any, time: number) => {
    //don't run the function if throttlePause is true
    if (throttlePause) return;

    //set throttlePause to true after the if condition. This allows the function to be run once
    throttlePause = true;

    //setTimeout runs the callback within the specified time
    setTimeout(() => {
        callback();

        //throttlePause is set to false once the function has been called, allowing the throttle function to loop
        throttlePause = false;
    }, time);
};

export { debounce, throttle };
