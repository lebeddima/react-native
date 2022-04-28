import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '@components/textes/CustomText';

/**
 * Item pair
 * @param {object} item
 * @param {function} handlePress
 * @param {boolean} checked
 */
const ItemPairs = ({item, handlePress, checked}: any) => {
  const checkedBackground = EStyleSheet.value('$white10');
  return (
    <TouchableOpacity
      style={[styles.checked, checked && {backgroundColor: checkedBackground}]}
      onPress={() => handlePress(item)}>
      <CustomText>{item.market}</CustomText>
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  checked: {
    borderRadius: 5,
    padding: 10,
  },
});

export default memo(ItemPairs);
