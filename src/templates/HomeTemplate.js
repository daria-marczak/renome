import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import SEO from '../components/seo';
import Snackbar from '../components/common/Snackbar';
import GlobalStyles from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import * as appActions from '../appLogic/appActions';

const HomeTemplate = ({
  children,
  message,
  kind,
  closeMessage,
  isSnackBarActive,
}) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO title="Home" keywords={[`renome`, `restaurant`, `food`]} />
      <GlobalStyles />
      <main>{children}</main>
      {isSnackBarActive && (
        <Snackbar
          message={message}
          isActive={isSnackBarActive}
          type={kind}
          closeMessage={closeMessage}
        />
      )}
    </>
  </ThemeProvider>
);

HomeTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  message: PropTypes.string,
  kind: PropTypes.string,
  closeMessage: PropTypes.func,
  isSnackBarActive: PropTypes.bool,
};

const mapStateToProps = state => ({
  kind: state.appData.message.kind,
  isSnackBarActive: state.appData.isSnackBarActive,
  message: state.appData.message.content,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      closeMessage: appActions.closeMessage,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeTemplate);
