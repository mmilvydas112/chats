import colors from './colors'

const fonts = {
  systemFont: {
    fontFamily: 'System',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  systemFontCenterBold: {
    fontFamily: 'System',
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
  },
  systemFontBold: {
    fontFamily: 'System',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  fontSizeHeading1: {
    fontSize: 24,
  },
  fontSizeHeading2: {
    fontSize: 22,
  },
  fontSizeNormal: {
    fontSize: 12,
  },
  fontSizeMedium: {
    fontSize: 14,
  },
  fontSizeSmall: {
    fontSize: 10,
  },
}

export const styles: any = {
  ...fonts,
  flex1: {
    flex: 1,
  },
  margin10: {
    margin: 10,
  },
  margin5: {
    margin: 5,
  },
  marginV10: {
    marginVertical: 10,
  },
  marginV5: {
    marginVertical: 5,
  },
  padding10: {
    padding: 10,
  },
  padding5: {
    padding: 5,
  },
  paddingV10: {
    paddingVertical: 10,
  },
  paddingV5: {
    paddingVertical: 5,
  },
  paddingH10: {
    paddingHorizontal: 10,
  },
  paddingH5: {
    paddingHorizontal: 5,
  },
  marginH10: {
    marginHorizontal: 10,
  },
  marginH5: {
    marginHorizontal: 5,
  },
  defaultShadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.33,
    shadowRadius: 6.66,
    elevation: 7,
  },
  welcome: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
}

export default styles
