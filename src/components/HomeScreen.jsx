import React, { useContext } from 'react';
import { Surface, Text } from 'react-native-paper';
import styles from '../config/styles';
import TrocaTema from './TrocaTema';
import { TemaContext } from '../contexts/TemaContext';

export default function HomeScreen() {
const { tema } = useContext(TemaContext);
return (
    <Surface style={styles.container}>
      <Text>cavalos homosexuais</Text>
      <TrocaTema />
    </Surface>
  );
}
