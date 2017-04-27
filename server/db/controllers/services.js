import Services from '../models/services';

const All = (req, res) => {
  Services.find({}, (err, docs) => {
    res.send(docs);
  });
};

export default {
  All,
};
