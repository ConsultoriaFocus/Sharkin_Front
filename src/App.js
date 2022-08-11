import React, { Fragment } from 'react';
import MyRoutes from './routes';
import play_sound from './components/PlaySound/playAlarm'


play_sound()
const App = () => (

  <Fragment>
    <MyRoutes />
  </Fragment>
)



export default App;

