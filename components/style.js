import { Dimensions } from 'react-native';
import _ from 'lodash';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const hscale = size => width / guidelineBaseWidth * size;
const vscale = size => height / guidelineBaseHeight * size;
const mscale = (size, factor = 0.5) => size + (hscale(size) - size) * factor;

const functions = {
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

export default class Style {

    static scale = (styles) => {
        _.forEach(styles, (style, key) => {
            _.forEach(style, (value, prop) => {
                if (_.has(functions, prop)) {
                    style[prop] = functions[prop](value);
                }
            });
        });
        return styles;
    }

}