import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {FlatList, TouchableOpacity} from 'react-native';
import ModalCustom from '@components/modals/ModalCustom';
import CustomText from '@components/textes/CustomText';
import Icon from '@components/icons/Icon';
import ItemPairs from './ItemPairs';

/**
 * Modal for fees pairs
 * @param {function} onClose - open/close modal
 * @param {boolean} visible - is visible modal
 * @param {array} data - the list of pairs
 * @param {object} value - checked value
 * @param {function} onChangeValue - set new value
 */
const PairsModal = ({onClose, visible, data, value, onChangeValue}: any) => {
  const renderItem = ({item}: any) => {
    const checked = item.id === value.id;

    const handlePress = (pair: any) => {
      onChangeValue(pair);
      onClose(false);
    };

    return (
      <ItemPairs item={item} checked={checked} handlePress={handlePress} />
    );
  };
  return (
    <>
      <TouchableOpacity
        style={styles.pressable}
        onPress={() => onClose(true)}
        activeOpacity={0.6}>
        <CustomText fontWeight="bold" textAlign="center">
          {value?.market}
        </CustomText>
        <Icon name="arrow-down" />
      </TouchableOpacity>
      <ModalCustom onClose={onClose} visible={visible}>
        <FlatList
          style={styles.modalContainer}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ModalCustom>
    </>
  );
};

const styles = EStyleSheet.create({
  modalContainer: {
    height: '50%',
  },
  pressable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    borderColor: '$white25',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});

export default PairsModal;
