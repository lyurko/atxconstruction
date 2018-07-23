// @flow
import React from 'react';
import { connect } from 'react-redux';

export function Home() {
  return (
    <div className="home">
    Welcome to ATX Construction
    </div>
  )
}

export default connect(null, null)(Home);