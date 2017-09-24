import React from 'react';
import { Text as TextRN } from 'react-native';

const fonts = {
    mono: 'monospace',
    roboto: 'Roboto',
    thin: 'sans-serif-thin',
    normal: 'sans-serif'
};

export default class Text extends TextRN {
    render = () => {
        let style = [];
        if (this.props.mono) {
            style.push({
                fontFamily: fonts.mono
            });
        } else if(this.props.thin) {
            style.push({
                fontFamily: fonts.thin
            });
        } else if(this.props.roboto) {
            style.push({
                fontFamily: fonts.roboto
            });
        } else if(this.props.normal) {
            style.push({
                fontFamily: fonts.normal
            });
        } else {
            style.push({
                fontFamily: fonts.thin
            });
        }
        style.push(this.props.style);
        let oldProps = this.props;
        this.props = { ...this.props, style: style };
        try {
            return super.render();
        } finally {
            this.props = oldProps;
        }
    }
}