import * as express from 'express';
import { Server } from 'http';
import { AddressInfo } from 'net';

let app = express();

app.use('/', (req: any, res: any, next: any) => {
  res.send('Hello 123');
  next();
});

let server: Server = app.listen(8081, () => {
  let addInfo: AddressInfo | string = server.address();
  if (typeof addInfo === 'object') {
    console.log("Example app listening at http://%s:%s", addInfo.address, addInfo.port);
  } else {
    console.log("Example app listening at %s", addInfo);
  }
  
  
});