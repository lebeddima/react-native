import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import {StackScreenProps} from '@react-navigation/stack';
import SafeContainer from '@components/containers/SafeContainer';
import Link from '@components/textes/Link';
import {scaledSize} from '@utils/scaledSize';
import {getRegisterList, selectTermsList} from '@store/pages';

interface IPage {
  id: number;
  slug: string;
  header: string;
}

/**
 * Terms of use screen
 * @param {object} navigation
 */
function TermsOfUseScreen({navigation}: StackScreenProps<any>) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRegisterList());
  }, []);

  const termsList = useSelector(selectTermsList);

  const renderItemMenu = (item: IPage, index: number) => {
    const onPress = () => {
      navigation.navigate('TermsOfUseDetail', {
        slug: item.slug,
        title: item.header,
      });
    };

    return (
      <View key={index} style={styles.containerStyle}>
        <Link title={item.header} onPress={onPress} />
      </View>
    );
  };
  if (!termsList) {
    return null;
  }

  return (
    <SafeContainer>
      <ScrollView>{termsList.map(renderItemMenu)}</ScrollView>
    </SafeContainer>
  );
}

const styles = EStyleSheet.create({
  containerStyle: {
    marginVertical: scaledSize(16),
  },
});

export default TermsOfUseScreen;
