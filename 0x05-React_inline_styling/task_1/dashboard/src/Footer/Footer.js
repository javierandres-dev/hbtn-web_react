import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

function Footer() {
  return (
    <footer className={css(styles.footer)}>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </footer>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    textAlign: 'center',
    fontStyle: 'italic',
    borderTop: 'thick solid #e0344a',
  },
});

export default Footer;
