import React from 'react';
import { Image } from '@chakra-ui/react';
import appstore from '../assets/appstore.svg';
import googleplay from '../assets/googleplay.svg';

export default function AppStoreBadge({ url, store }) {
  let logo;
  if (store === 'appstore') {
    logo = appstore;
  } else if (store === 'googleplay') {
    logo = googleplay;
  }

  return (
    <a href={url} target='_blank' rel='noopener noreferrer'>
      <Image
        src={logo}
        alt={`${store} logo`}
      />
    </a>
  );
}