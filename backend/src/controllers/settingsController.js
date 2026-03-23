import Setting from '../models/Setting.js';

export const getSettings = async (_, res) => {
  let settings = await Setting.findOne();
  if (!settings) {
    settings = await Setting.create({});
  }
  res.json(settings);
};

export const updateSettings = async (req, res) => {
  let settings = await Setting.findOne();
  if (!settings) settings = await Setting.create({});

  Object.assign(settings, req.body);
  await settings.save();
  res.json(settings);
};
