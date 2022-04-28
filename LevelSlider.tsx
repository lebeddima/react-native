import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomText from '@components/textes/CustomText';
import Row from '@components/containers/Row';

/**
 * Scale the next level
 * @param {object} fees
 */
const LevelSlider = ({fees}: any) => {
  const {t} = useTranslation();
  const maximumTrackTintColor = EStyleSheet.value('$white10');
  const minimumTrackTintColor = EStyleSheet.value('$primaryMain');
  const white = EStyleSheet.value('$white');

  const sliderStyle = {
    slider: {
      marginVertical: 10,
    },
    thumbStyle: {
      backgroundColor: white,
      borderWidth: 3,
      borderColor: minimumTrackTintColor,
    },
  };

  return (
    <View style={styles.container}>
      <CustomText>
        {`${fees.current_level_amount_face} / ${fees.next_level_amount}`}
      </CustomText>
      <Slider
        containerStyle={sliderStyle.slider}
        disabled
        value={fees.current_level_amount_face}
        minimumValue={0}
        maximumValue={fees.next_level_amount}
        maximumTrackTintColor={maximumTrackTintColor}
        minimumTrackTintColor={minimumTrackTintColor}
        thumbStyle={sliderStyle.thumbStyle}
      />
      <Row containerStyle={styles.leftBlock}>
        <CustomText style={styles.label}>{t('dashboard.next_level_left')}: </CustomText>
        <CustomText style={styles.leftAmount}>{fees.left_amount} </CustomText>
        <CustomText style={styles.label}>BTC</CustomText>
      </Row>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    marginTop: 30,
    borderRadius: 5,
    backgroundColor: '$white5',
    padding: 10,
  },
  leftAmount: {
    color: '$primaryMain',
  },
  leftBlock: {
    flexWrap: 'wrap',
  },
  label: {
    color: '$white50',
  },
});

export default LevelSlider;
