import {svgArcBuilder} from './svg-arc-builder.js';
import { faSun, faTshirt, faBowlFood, faTooth, faCarSide } from '@fortawesome/free-solid-svg-icons';

export function arcDictionary() {
    return [
        {//wake up bar
            showTime: new Date().setHours(15, 0, 0, 0),
            stopTime: new Date().setHours(15, 45, 0, 0),
            arcConfig: {startDegrees: (30/60) * 360, lengthInDegrees: (10/60) * 360, color: 'yellow', rounded: false},
            textLabel: {
                position: {
                    top: '650px',
                    left: '300px'
                },
                text: 'Wake Up!',
                icon: faSun,
                iconKey: 'sun'
            }
        },
        {//get dressed bar
            showTime: new Date().setHours(15, 0, 0, 0),
            stopTime: new Date().setHours(16, 0, 0, 0),
            arcConfig: {startDegrees: (40/60) * 360, lengthInDegrees: (20/60) * 360, color: 'green', rounded: false},
            textLabel: {
                position: {
                    top: '75px',
                    left: '250px'
                },
                text: 'Get Dressed!',
                icon: faTshirt,
                iconKey: 'shirt'
            }
        },
        {//eat and shoes bar
            showTime: new Date().setHours(15, 45, 0, 0),
            stopTime: new Date().setHours(17, 0, 0, 0),
            arcConfig: {startDegrees: (0/60) * 360, lengthInDegrees: (30/60) * 360, color: 'red', rounded: false},
            textLabel: {
                position: {
                    top: '75px',
                    left: '1200px'
                },
                text: 'Eat / Shoes On',
                icon: faBowlFood,
                iconKey: 'bowlFoot'
            }
        },
        {//brush teeth bar
            showTime: new Date().setHours(16, 0, 0, 0),
            stopTime: new Date().setHours(17, 0, 0, 0),
            arcConfig: {startDegrees: (30/60) * 360, lengthInDegrees: (10/60) * 360, color: '#E600FF', rounded: false},
            textLabel: {
                position: {
                    top: '650px',
                    left: '375px'
                },
                text: 'Brush Teeth!',
                icon: faTooth,
                iconKey: 'shirt'
            }
        },
        {//to the car bar
            showTime: new Date().setHours(16, 0, 0, 0),
            stopTime: new Date().setHours(17, 0, 0, 0),
            arcConfig: {startDegrees: (40/60) * 360, lengthInDegrees: (10/60) * 360, color: 'orange', rounded: false},
            textLabel: {
                position: {
                    top: '350px',
                    left: '325px'
                },
                text: 'To the car!',
                icon: faCarSide,
                iconKey: 'car'
            }
        }
    ]
}