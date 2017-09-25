import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import Text from './text';
import Icon from './icon';
import Style, { Colors, Functions } from './style';
import _ from 'lodash';

export class Button extends PureComponent {

    render = () => {
        let Component = this.props.disabled ? TouchableOpacity : TouchableNativeFeedback;

        let touchableStyle = {};
        let textStyle = {};
        let iconStyle = {};

        if (this.props.color) {
            touchableStyle = {
                borderColor: this.props.color,
                backgroundColor: this.props.color
            };
        }

        if (this.props.textColor) {
            textStyle = {
                color: this.props.textColor
            };
            if (!this.props.iconColor) {
                iconStyle = {
                    color: this.props.textColor
                };
            }
        }

        if (this.props.iconColor) {
            iconStyle = {
                color: this.props.iconColor
            };
        }

        return (
            <View style={this.props.style}>
                <Component onPress={this.onPress}>
                    <View style={[styles.component, touchableStyle, this.props.disabled ? styles.disabled : {}]}>
                        {this.props.icon && <Icon icon={this.props.icon} style={[styles.icon, iconStyle, this.props.disabled ? styles.disabledIcon : {}]} />}
                        {this.props.text && <Text roboto style={[styles.text, textStyle, this.props.disabled ? styles.disabledText : {}]}>{_.upperCase(this.props.text)}</Text>}
                    </View>
                </Component>
            </View>
        );
    }

    onPress = () => {
        _.isFunction(this.props.onPress) && !this.props.disabled && this.props.onPress();
    }
}

export class BorderedButton extends PureComponent {

    render = () => {
        let Component = this.props.disabled ? TouchableOpacity : TouchableNativeFeedback;

        let touchableStyle = {};
        let textStyle = {};
        let iconStyle = {};

        if (this.props.color) {
            touchableStyle = {
                borderColor: this.props.color,
                backgroundColor: Colors.white
            };
            if (!this.props.textColor) {
                textStyle = {
                    color: this.props.color
                };
            }
            if (!this.props.iconColor) {
                iconStyle = {
                    color: this.props.color
                };
            }
        }

        if (this.props.textColor) {
            textStyle = {
                color: this.props.textColor
            };
            if (!this.props.iconColor) {
                iconStyle = {
                    color: this.props.textColor
                };
            }
        }

        if (this.props.iconColor) {
            iconStyle = {
                color: this.props.iconColor
            };
        }

        return (
            <View style={this.props.style}>
                <Component onPress={this.onPress}>
                    <View style={[styles.component, touchableStyle, this.props.disabled ? styles.disabledBordered : {}]}>
                        {this.props.icon && <Icon icon={this.props.icon} style={[styles.icon, iconStyle, this.props.disabled ? styles.disabledIcon : {}]} />}
                        {this.props.text && <Text roboto style={[styles.text, textStyle, this.props.disabled ? styles.disabledText : {}]}>{_.upperCase(this.props.text)}</Text>}
                    </View>
                </Component>
            </View>
        );
    }

    onPress = () => {
        _.isFunction(this.props.onPress) && !this.props.disabled && this.props.onPress();
    }
}

export class CircularButton extends PureComponent {

    render = () => {
        let Component = this.props.disabled ? TouchableOpacity : TouchableNativeFeedback;

        let size = _.isNumber(this.props.size) ? this.props.size : 40;
        let touchableStyle = {};
        let textStyle = {};
        let iconStyle = {};

        if (this.props.color) {
            touchableStyle = {
                borderColor: this.props.color,
                backgroundColor: this.props.color,
                height: Functions.height(size),
                width: Functions.width(size),
                borderRadius: Functions.borderRadius(size / 2)
            };
            if (!this.props.textColor) {
                textStyle = {
                    color: this.props.color
                };
            }
            if (!this.props.iconColor) {
                iconStyle = {
                    color: this.props.color
                };
            }
        }

        if (this.props.textColor) {
            textStyle = {
                color: this.props.textColor
            };
            if (!this.props.iconColor) {
                iconStyle = {
                    color: this.props.textColor
                };
            }
        }

        if (this.props.iconColor) {
            iconStyle = {
                color: this.props.iconColor
            };
        }

        return (
            <View style={this.props.style}>
                <Component onPress={this.onPress}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={[styles.circularComponent, touchableStyle, this.props.disabled ? styles.disabled : {}]}>
                            {this.props.icon && <Icon icon={this.props.icon} style={[styles.icon, iconStyle, this.props.disabled ? styles.disabledIcon : {}]} />}
                        </View>
                        <View>
                            {this.props.text && <Text roboto style={[styles.text, textStyle, this.props.disabled ? styles.disabledText : {}]}>{_.upperCase(this.props.text)}</Text>}
                        </View>
                    </View>
                </Component>
            </View>
        );
    }

    onPress = () => {
        _.isFunction(this.props.onPress) && !this.props.disabled && this.props.onPress();
    }
}

export class IconButton extends PureComponent {

    render = () => {
        let Component = this.props.disabled ? TouchableOpacity : TouchableNativeFeedback;

        let touchableStyle = {};
        let textStyle = {};
        let iconStyle = {};

        if (this.props.color) {
            if (!this.props.textColor) {
                textStyle = {
                    color: this.props.color
                };
            }
            if (!this.props.iconColor) {
                iconStyle = {
                    color: this.props.color
                };
            }
        }

        if (this.props.textColor) {
            textStyle = {
                color: this.props.textColor
            };
            if (!this.props.iconColor) {
                iconStyle = {
                    color: this.props.textColor
                };
            }
        }

        if (this.props.iconColor) {
            iconStyle = {
                color: this.props.iconColor
            };
        }

        return (
            <View style={this.props.style}>
                <Component onPress={this.onPress}>
                    <View style={[styles.view, touchableStyle, this.props.disabled ? styles.disabled : {}]}>
                        {this.props.icon && <Icon icon={this.props.icon} style={[styles.icon, iconStyle, this.props.disabled ? styles.disabledIcon : {}]} />}
                        {this.props.text && <Text roboto style={[styles.text, textStyle, this.props.disabled ? styles.disabledText : {}]}>{_.upperCase(this.props.text)}</Text>}
                    </View>
                </Component>
            </View>
        );
    }

    onPress = () => {
        _.isFunction(this.props.onPress) && !this.props.disabled && this.props.onPress();
    }
}

const styles = {
    component: {
        borderWidth: 1,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2
    },
    circularComponent: {
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 12,
        padding: 2
    },
    icon: {
        fontSize: 15,
        padding: 2
    },
    disabled: {
        borderColor: Colors.gray,
        backgroundColor: Colors.gray
    },
    disabledBordered: {
        borderColor: Colors.gray,
        backgroundColor: Colors.white
    },
    disabledText: {
        color: Colors.darkGray
    },
    disabledIcon: {
        color: Colors.darkGray
    }
};

styles = StyleSheet.create(Style.scale(styles));