import { Dimensions } from 'react-native';
import _ from 'lodash';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const hscale = size => width / guidelineBaseWidth * size;
const vscale = size => height / guidelineBaseHeight * size;
const mscale = (size, factor = 0.5) => size + (hscale(size) - size) * factor;

export const Functions = {
    fontSize: hscale,
    marginTop: hscale,
    marginBottom: hscale,
    marginLeft: hscale,
    marginRight: hscale,
    margin: hscale,
    paddingTop: hscale,
    paddingBottom: hscale,
    paddingLeft: hscale,
    paddingRight: hscale,
    padding: hscale,
    height: hscale,
    width: hscale,
    borderRadius: hscale
}

export const Colors = {
    red: '#e74c3c',
    green: '#2ecc71',
    blue: '#3498db',
    orange: '#f39c12',
    gray: '#7f8c8d',
    darkGray: '#34495e',
    purple: '#9b59b6',
    yellow: '#ffdc47',
    white: '#ffffff',
    transparent: 'transparent'
};

export default class Style {

    static scale = (styles) => {
        _.forEach(styles, (style, key) => {
            _.forEach(style, (value, prop) => {
                if (_.has(Functions, prop)) {
                    style[prop] = Functions[prop](value);
                }
            });
        });
        return styles;
    }

}