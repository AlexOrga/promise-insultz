let nouns = [];
let descriptors = [];

const nounsJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/nouns.json')
      .done((data) => {
        resolve(data.nouns);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const descriptorsJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/descriptors.json')
      .done((data) => {
        resolve(data.descriptors);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const getAllData = () => {
  // resolve promises
  return Promise.all([nounsJSON(), descriptorsJSON(),])
    .then((results) => {
      nouns = results[0];
      descriptors = results[1];
    })
    .catch((err) => {
      console.error('error out', err);
    });
};

const initializer = () => {
  getAllData();
};

const getNouns = () => {
  return nouns[Math.floor(Math.random() * nouns.length)].text;
};

const getDescriptors = () => {
  return descriptors[Math.floor(Math.random() * descriptors.length)].text;
};

module.exports = {
  initializer,
  getNouns,
  getDescriptors,
};

// const insultMe = require('./events');
// const domString = require('./dom');

// const getDesc = () => {
//   return new Promise((resolve, reject) => {
//     $.get('../db/descriptors.json')
//       .done((data) => {
//         resolve(data.descriptors);
//       })
//       .fail((error) => {
//         reject('Oops something went wrong', error);
//       });
//   });
// };

// const getNouns = () => {
//   return new Promise((resolve, reject) => {
//     $.get('../db/nouns.json')
//       .done((data) => {
//         resolve(data.nouns);
//       })
//       .fail((error) => {
//         reject('Oops something went wrong', error);
//       });
//   });
// };

// const initializer = () => {
//   getDesc().then((descriptors) => {
//     getNouns().then((nouns) => {
//       // const nounLength = nouns.length;
//       domString(descriptors, nouns);
//     });
//   });
// };

// module.exports = {
//   initializer,
//   generateInsult,
