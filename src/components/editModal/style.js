import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

// define your styles
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.modalBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentWrapper: {
    width: '80%',
    backgroundColor: colors.whiteColor,
    padding: 20,
    borderRadius: 20,
  },
  title: {
    color: colors.textPrimary,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
  },
  closeButtonWrapper: {
    borderWidth: 1,
    borderColor: colors.textPrimary,
    paddingVertica: 6,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  closeButtonText: {
    color: colors.textPrimary,
  },
  confirmButonWrapper: {
    borderWidth: 1,
    borderColor: colors.textPrimary,
    paddingVertica: 6,
    paddingHorizontal: 30,
    backgroundColor: colors.textPrimary,
    borderRadius: 10,
  },
  confirmButonText: {
    color: colors.whiteColor,
  },
  validationText: {
    color: colors.danger,
    textAlign: 'center',
  },
});

export default styles;
