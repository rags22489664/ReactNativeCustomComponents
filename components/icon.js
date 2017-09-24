import React, { PureComponent } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from 'lodash';

export const Icons = {
    cross: 'cross'
};

export const Family = {
    MaterialCommunityIcons: 'MaterialCommunityIcons'
};

export const Mappings = {
    MaterialCommunityIcons: {
        cross: 'close'
    }
}

const Components = {
    MaterialCommunityIcons: MaterialCommunityIcons
}

export default class Icon extends PureComponent {
    render = () => {
        let family = _.isEmpty(this.props.family) || _.isEmpty(Components[this.props.family]) ? Family.MaterialCommunityIcons : this.props.family;
        let Component = Components[family];
        return (
            <Component {...this.props} name={Mappings[family][this.props.icon]} />
        );
    }
}