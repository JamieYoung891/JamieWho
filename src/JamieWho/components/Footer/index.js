import React from 'react';
import FooterSlogan from './FooterSlogan';
import FooterContent from './FooterContent';
import { Container } from '../styled';

const Footer = () => (
  <Container.MaxWidth as={Container.ContentSection}>
    <FooterSlogan />
    <FooterContent />
  </Container.MaxWidth>
);

export default Footer