import {svgArcBuilder} from './svg-arc-builder.js';
import { faSun, faTshirt, faBowlFood, faTooth, faCarSide } from '@fortawesome/free-solid-svg-icons';

export function arcDictionary() {
    const hb = 6;
    return [
        {//wake up bar
            showTime: new Date().setHours(hb, 0, 0, 0),
            stopTime: new Date().setHours(hb, 45, 0, 0),
            arcConfig: {startDegrees: (30/60) * 360, lengthInDegrees: (10/60) * 360, color: 'yellow', rounded: false},
            textLabel: {
                position: {
                    bottom: '0px',
                    left: '0px'
                },
                text: 'Wake Up!',
                icon: faSun,
                iconKey: 'sun'
            }
        },
        {//get dressed bar
            showTime: new Date().setHours(hb, 0, 0, 0),
            stopTime: new Date().setHours(hb+1, 0, 0, 0),
            arcConfig: {startDegrees: (40/60) * 360, lengthInDegrees: (20/60) * 360, color: 'green', rounded: false},
            textLabel: {
                position: {
                    top: '50px',
                    left: '0px'
                },
                text: 'Get Dressed!',
                icon: faTshirt,
                iconKey: 'shirt'
            }
        },
        {//eat and shoes bar
            showTime: new Date().setHours(hb, 45, 0, 0),
            stopTime: new Date().setHours(hb+2, 0, 0, 0),
            arcConfig: {startDegrees: (0/60) * 360, lengthInDegrees: (30/60) * 360, color: 'red', rounded: false},
            textLabel: {
                position: {
                    top: '50px',
                    right: '0px'
                },
                text: 'Eat / Shoes On',
                icon: faBowlFood,
                iconKey: 'bowlFoot'
            }
        },
        {//brush teeth bar
            showTime: new Date().setHours(hb+1, 0, 0, 0),
            stopTime: new Date().setHours(hb+2, 0, 0, 0),
            arcConfig: {startDegrees: (30/60) * 360, lengthInDegrees: (10/60) * 360, color: '#E600FF', rounded: false},
            textLabel: {
                position: {
                    bottom: '0px',
                    left: '0px'
                },
                text: 'Brush Teeth!',
                icon: faTooth,
                iconKey: 'shirt'
            }
        },
        {//to the car bar
            showTime: new Date().setHours(hb+1, 0, 0, 0),
            stopTime: new Date().setHours(hb+2, 0, 0, 0),
            arcConfig: {startDegrees: (40/60) * 360, lengthInDegrees: (10/60) * 360, color: 'orange', rounded: false},
            textLabel: {
                position: {
                    top: '350px',
                    left: '-150px'
                },
                text: 'To the car!',
                icon: faCarSide,
                iconKey: 'car'
            }
        }
    ]
}