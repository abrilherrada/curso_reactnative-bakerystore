import { View, Text } from 'react-native';

import { styles } from './styles';

const Label = ({ children, label, labelStyles, subLabel, subLabelStyles }) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.label, ...labelStyles }}>{label}</Text>
      {children}
      {subLabel && <Text style={{ ...styles.subLabel, ...subLabelStyles }}>{subLabel}</Text>}
    </View>
  );
};

export default Label;
