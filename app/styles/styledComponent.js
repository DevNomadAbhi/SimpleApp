import {color} from './color';
import {fontSize, WIDTH} from './dimensions';
import {fontFamily} from './fonts';

const styles = {
  mainComponent: {
    flex: 1,
    backgroundColor: color.cadbury,
  },
  mainComponentLight: {
    flex: 1,
    backgroundColor: color.chocolateLight,
  },
  banner: {
    height: 300,
    width: 300,
    marginTop: 10,
  },
  spalshText: {
    fontSize: fontSize.l,
    fontFamily: fontFamily.poppinsSemiBold,
    color: color.colorWhite,
    alignSelf: 'center',
  },
  formText: {
    fontSize: fontSize.l,
    fontFamily: fontFamily.poppinsRegular,
    color: color.colorWhite,
  },
  profileImage: {
    width: 100,
    borderRadius: 50,
    borderWidth: 1.5,
    height: 100,
    marginTop: 10,
    borderColor: color.colorWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 50,
    paddingLeft: 5,
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: color.colorWhite,
  },
  placeholder: {
    color: color.colorWhite,
    fontSize: fontSize.m,
    fontFamily: fontFamily.poppinsSemiBold,
  },
  eye: {width: 20, height: 20},
  errorcode: {
    color: color.colorWhite,
    fontSize: fontSize.m,
    fontFamily: fontFamily.poppinsRegular,
    marginStart: 10,
  },
  button: {
    borderColor: color.colorWhite,
    height: 50,
    width: WIDTH - 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2.5,
    borderRadius: 15,
  },
  back: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  flatlistDescription2View: {
    borderWidth: 1.5,
    borderRadius: 10,
    backgroundColor: color.colorWhite,
    height: 40,
    marginStart: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlistdesc1Text: {
    color: color.chocolate,
    fontSize: fontSize.l,
    fontFamily: fontFamily.poppinsMedium,
    marginStart: 20,
  },
  flatlistdesc2Text: {
    color: color.cadbury,
    fontFamily: fontFamily.poppinsBold,
    fontSize: fontSize.m,
  },
  rowDirectionViewForTopIcons: {
    marginStart: 15,
    marginEnd: 20,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchImage: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    marginStart: 10,
  },
  extraViewsForData: {
    marginTop: 10,
    backgroundColor: color.colorWhite,
    width: WIDTH - 20,
    borderRadius: 10,
    height: 180,
    elevation: 2,
    shadowRadius: 4,
  },
  topMargin: {
    marginTop: Platform.OS == 'android' ? 40 : 0,
    marginStart: 10,
    marginEnd: 10,
  },
  separator: {
    borderWidth: 0.5,
    borderColor: color.colorWhite,
    marginTop: 10,
    marginBottom: 25,
  },
};

export {styles};
