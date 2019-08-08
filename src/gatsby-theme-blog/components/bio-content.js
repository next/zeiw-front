import React, { Fragment } from 'react'
import { Styled } from 'theme-ui'

export default () => (
  <Fragment>
    <strong>ZEIW</strong> — Open source community-based game{' '}
    <span role="img" aria-label="Ping pong">
      🏓
    </span>
    <br />
    <Styled.a href="https://play.zeiw.me">play now</Styled.a> •{' '}
    <Styled.a href="https://discord.gg/h7NxqBe">discord</Styled.a> •{' '}
    <Styled.a href="https://twitter.com/zeiwhq">twitter</Styled.a> •{' '}
    <Styled.a href="https://github.com/ZEIW">github</Styled.a>
  </Fragment>
)
