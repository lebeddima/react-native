import React from 'react';
import { Text, StyleSheet } from 'react-native';
import normalizeFontSize from '../../utils/normalizeFontSize';
import { styles } from '../../constants/default';

/**
 * Custom text component
 * with default styles depend on design
 * @param {JSX.Element} children - the children component
 * @param {object} style - styles
 * @param {number} numberOfLines - the numbers of line
 * @returns {JSX.Element}
 */
const TextBold = ({ children, style, numberOfLines }) => (
  <Text
    style={[defaultStyles.default, style]}
    allowFontScaling={false}
    numberOfLines={numberOfLines}
  >
    {children}
  </Text>
);

const defaultStyles = StyleSheet.create({
  default: {
    fontFamily: styles.fontFamilyBold,
    fontSize: normalizeFontSize(styles.fontSize),
  },
});

export default TextBold;
