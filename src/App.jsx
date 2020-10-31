import React, { useEffect, useState } from 'react'
import { Login, Player } from './components'
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromResponse } from './spotify';
import { useStateValue } from './stateProvider/StateProvider';
const spotify = new SpotifyWebApi();
const App = () => {

  const [{ user, token }, dispatch] = useStateValue()
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user
        })
      })
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      }).catch((err)=>console.log(err));
    }
  }, [token,dispatch])
  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
            <Login />
          )
      }
    </div>
  )
}

export default App
