import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './text';
import Icon, { Icons } from './icon';
import { IconButton } from './button';
import Style, { Colors } from './style';
import _ from 'lodash';

export default class Card extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: this.props.collapsed
        };
    }

    render = () => {
        return (
            <View style={[styles.card, this.props.style]}>
                <View style={[styles.section, styles.headerSection]}>
                    <View style={[styles.headerContainer]}>
                        {this.props.header != null && this.props.header}
                        {this.props.header == null && this.props.title != null &&
                            <View style={styles.headerTitle}>
                                {this.props.icon && <Icon icon={this.props.icon} style={[styles.headerTitleIcon, this.props.iconStyle]} />}
                                <Text roboto style={[styles.headerTitleText, this.props.titleStyle]}>{this.props.title}</Text>
                            </View>
                        }
                    </View>
                    <IconButton icon={this.state.collapsed ? Icons.arrowDownCircle : Icons.arrowUpCircle} onPress={this.toggleCollapsed} />
                </View>
                {!this.state.collapsed && this.props.body && <View style={[styles.section]}>
                    {this.props.body}
                </View>}
                {this.props.footer && <View style={[styles.section]}>
                    {this.props.footer}
                </View>}
            </View>
        );
    }

    toggleCollapsed = () => {
        this.setState({ collapsed: !this.state.collapsed });
    }

}

const styles = {
    card: {
        borderWidth: 1,
        borderColor: Colors.gray
    },
    section: {
        padding: 5
    },
    headerSection: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerContainer: {
        flex: 1
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTitleText: {
        fontSize: 12,
    },
    headerTitleIcon: {
        fontSize: 13,
        paddingRight: 5
    }
};

styles = StyleSheet.create(Style.scale(styles));