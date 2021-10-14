import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Card = ({title, description}) => {

    return (
        <View style={styles.card_container}>
            <Text style={styles.card_header}>{title}</Text>
            <Text style={styles.card_contents}>{description}</Text>
        </View>
    )
}

export default Card;