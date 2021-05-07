/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Topbar = () => (
  <div
    className="Topbar"
    css={css`
      position: absolute;
      top: 0;
      height: 70px;
      background: #070707;
      left: 200px;
      width: calc(100% - 200px);
      padding: 0px;

      h2 {
        float : left;
        margin-left: 60px;
      }

      .a {
        margin-left:800px;
      }
    `}
  >
    <h2 class="a">Appointment</h2>
    <h2>Blogs</h2>
    <h2>Playlist</h2>
  
  </div>
)

export default Topbar
