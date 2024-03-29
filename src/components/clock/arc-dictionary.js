import {svgArcBuilder} from './svg-arc-builder.js';
import { faSun, faTshirt, faBowlFood, faTooth, faCarSide, faDumbbell, faBookBible, faBrush, faShoePrints } from '@fortawesome/free-solid-svg-icons';

export function arcDictionary() {
    const hb = 6;
    return [
        {//get dressed bar
            showTime: new Date().setHours(hb, 0, 0, 0),
            stopTime: new Date().setHours(hb+1, 0, 0, 0),
            arcConfig: {startMinute: 35, lengthInMinutes: 15, color: 'green', rounded: false},
            textLabel: {
                position: {
                    top: '500px',
                    left: '-200px'
                },
                text: 'Get Dressed / Make Bed',
                icon: faTshirt,
                iconKey: 'shirt'
            }
        },
        {
            showTime: new Date().setHours(hb, 0, 0, 0),
            stopTime: new Date().setHours(hb+1, 10, 0, 0),
            arcConfig: {startMinute: 50, lengthInMinutes: 10, color: 'blue', rounded: false},
            textLabel: {
                position: {
                    top: '75px',
                    left: '-150px'
                },
                text: 'Brush Hair / Appliance',
                icon: faBrush,
                iconKey: 'bed-brush'
            }
        },
        {
            showTime: new Date().setHours(hb, 45, 0, 0),
            stopTime: new Date().setHours(hb+2, 0, 0, 0),
            arcConfig: {startMinute: 0, lengthInMinutes: 25, color: 'red', rounded: false},
            textLabel: {
                position: {
                    top: '350px',
                    right: '-75px'
                },
                text: 'Eat',
                icon: faBowlFood,
                iconKey: 'bowlFoot'
            }
        },
        {//brush teeth bar
            showTime: new Date().setHours(hb, 45, 0, 0),
            stopTime: new Date().setHours(hb+2, 0, 0, 0),
            arcConfig: {startMinute: 25, lengthInMinutes: 9, color: '#E600FF', rounded: false},
            textLabel: {
                position: {
                    bottom: '0px',
                    left: '300px'
                },
                text: 'Brush Teeth!',
                icon: faTooth,
                iconKey: 'shirt'
            }
        },
        {
            showTime: new Date().setHours(hb+1, 0, 0, 0),
            stopTime: new Date().setHours(hb+2, 0, 0, 0),
            arcConfig: {startMinute: 34, lengthInMinutes: 6, color: 'brown', rounded: false},
            textLabel: {
                position: {
                    bottom: '75px',
                    left: '-50px'
                },
                text: 'Shoes/Water',
                icon: faShoePrints,
                iconKey: 'shoe'
            }
        },
        {//to the car bar
            showTime: new Date().setHours(hb+1, 0, 0, 0),
            stopTime: new Date().setHours(hb+2, 0, 0, 0),
            arcConfig: {startMinute: 40, lengthInMinutes: 5, color: '#C89700', rounded: false},
            textLabel: {
                position: {
                    bottom: '300px',
                    left: '-150px'
                },
                text: 'To the car!',
                icon: faCarSide,
                iconKey: 'car'
            }
        }
    ]
}