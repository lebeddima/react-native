import React from 'react';
import {View} from 'react-native';
import Row from '@components/containers/Row';
import CustomText from '@components/textes/CustomText';
import {useTranslation} from 'react-i18next';
import EStyleSheet from 'react-native-extended-stylesheet';

/**
 * Fees info
 * @param {object} fees - fees of current pairs
 */
const FeesInfo = ({fees}: any) => {
  const {t} = useTranslation();

  return (
    <Row justifyContent="space-between" containerStyle={styles.container}>
      <View style={styles.feeBlock}>
        <CustomText type="label" style={styles.label}>
          {t('common.maker')}
        </CustomText>
        <CustomText type="t3">{fees.maker_fee}%</CustomText>
      </View>
      <View style={styles.feeBlock}>
        <CustomText type="label" style={styles.label}>
          {t('common.taker')}
        </CustomText>
        <CustomText type="t3">{fees.taker_fee}%</CustomText>
      </View>
    </Row>
  );
};

const styles = EStyleSheet.create({
  container: {
    marginTop: 30,
  },
  feeBlock: {
    borderRadius: 5,
    backgroundColor: '$white5',
    width: '48%',
    padding: 10,
  },
  label: {
    marginBottom: 5,
  },
});

export default FeesInfo;
