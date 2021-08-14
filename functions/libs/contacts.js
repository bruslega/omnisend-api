'use strict';
const cors = require('cors')({ origin: true });
const request = require('request');

const updatead = (req, res) => {
  cors(req, res, () => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
    );
    console.log('start time', new Date());
    const errorResponse = (error) => {
      let err = {
        message: 'ERROR',
        error: error,
      };
      res.json(err);
    };
    console.log(req);

    request(
      {
        url: 'https://api.omnisend.com/v3/contacts',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-API-KEY':
            '58e48e58597ed7795beea598-xW7gMADiaARavqybjK0llMPPME2vjms1FZF1LSQVIKRNcbuY4I',
        },
        json: true,
        body: req.body,
      },
      function (error, response, body) {
        console.log(response);
        if (error !== null) {
          console.log('exec error: ' + error);
          errorResponse(body);
        } else {
          return res.json(response.body);
        }
      }
    );
  });
};
module.exports = updatead;
