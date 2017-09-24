import React from 'react';
import { Text as TextRN, StyleSheet } from 'react-native';

const fonts = {
    mono: 'monospace',
    roboto: 'Roboto',
    thin: 'sans-serif-thin',
    normal: 'sans-serif'
};

export default class Text extends TextRN {
    render = () => {
        let style = [];
        let override;
        if (this.props.mono) {
            override = {
                fontFamily: fonts.mono
            };
        } else if (this.props.thin) {
            override = {
                fontFamily: fonts.thin
            };
        } else if (this.props.roboto) {
            override = {
                fontFamily: fonts.roboto
            };
        } else if (this.props.normal) {
            override = {
                fontFamily: fonts.normal
            };
        } else {
            override = {
                fontFamily: fonts.thin
            };
        }
        style.push(override);
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